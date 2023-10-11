from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView, DetailView, ListView, DeleteView, UpdateView
from mixins.mixins import GroupRequiredMixin
from django.views.generic import ListView
from django.shortcuts import render
from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect
from django.views import View
from .models import Campaign, CampaignRegistration


class AdminCampaignListView(LoginRequiredMixin, ListView):
    template_name = 'campaigns/admin_campaign_list.html'
    model = Campaign
    context_object_name = 'campaigns'
    paginate_by = 10

    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['registrations'] = CampaignRegistration.objects.all()
        return context


class CampaignRegisterView(LoginRequiredMixin, View):
    template_name = 'campaigns/campaign_register.html'

    def get(self, request, pk):
        campaign = Campaign.objects.get(pk=pk)
        context = {'campaign': campaign}
        return render(request, self.template_name, context)

    def post(self, request, pk):
        campaign = Campaign.objects.get(pk=pk)
        user = request.user

        if not CampaignRegistration.objects.filter(campaign=campaign, user=user).exists():
            registration = CampaignRegistration.objects.create(campaign=campaign, user=user)
            registration.save()

        return redirect('campaign_success', pk=campaign.pk)


class CampaignUnregisterView(LoginRequiredMixin, View):
    def get(self, request, pk):
        campaign = get_object_or_404(Campaign, pk=pk)
        user = request.user

        try:
            registration = CampaignRegistration.objects.get(campaign=campaign, user=user)
            registration.delete()
            messages.success(request, f'You have been successfully unregistered from {campaign.title}.')
        except CampaignRegistration.DoesNotExist:
            messages.warning(request, f'You were not registered for {campaign.title}.')

        return redirect('campaign_detail', pk=campaign.pk)


class CampaignListView(LoginRequiredMixin, ListView):
    model = Campaign
    template_name = 'campaigns/campaign_list.html'
    context_object_name = 'campaigns'
    paginate_by = 4

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('-creation_time')

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class CampaignDetailView(LoginRequiredMixin, DetailView):
    model = Campaign
    template_name = 'campaigns/campaign_detail.html'
    context_object_name = 'campaign'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user

        # Проверка дали потребителят е аутентикиран и има атрибут type_user
        if user.is_authenticated and hasattr(user, 'type_user') and user.type_user is not None:
            # Проверка дали потребителят е Patient или Parent of a patient
            if user.type_user.lower() in ['patient', 'parent of a patient']:
                context['user_can_register'] = True
            else:
                context['user_can_register'] = False
        else:
            context['user_can_register'] = False

        # Останалата част на кода остава непроменена
        context['user_already_registered'] = CampaignRegistration.objects.filter(campaign=context['campaign'],
                                                                                 user=user).exists()
        return context


    def post(self, request, pk):
        return redirect('campaign_detail', pk=pk)


class CampaignCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins', 'Staff']
    model = Campaign
    template_name = 'campaigns/campaign_create.html'
    fields = ['title', 'image', 'description', 'youtube_link', 'target_amount', 'start_date', 'end_date']
    success_url = reverse_lazy('campaign_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class CampaignUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admins', 'Staff']
    model = Campaign
    template_name = 'campaigns/campaign_update.html'
    fields = ['title', 'image', 'description', 'youtube_link', 'target_amount', 'start_date', 'end_date']
    success_url = reverse_lazy('campaign_list')


class CampaignDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admins', 'Staff']
    model = Campaign
    template_name = 'campaigns/campaign_confirm_delete.html'
    success_url = reverse_lazy('campaign_list')


class CampaignSupportView(LoginRequiredMixin, View):
    template_name = 'campaigns/campaign_support.html'

    def get(self, request, pk):
        campaign = Campaign.objects.get(pk=pk)
        context = {'campaign': campaign}
        return render(request, self.template_name, context)

    def post(self, request, pk):
        campaign = Campaign.objects.get(pk=pk)
        return redirect('campaign_success', pk=campaign.pk)
