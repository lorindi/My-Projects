from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import CreateView, DetailView, ListView, DeleteView, UpdateView
from .models import Campaign
from mixins.mixins import GroupRequiredMixin  # Импортирайте GroupRequiredMixin от вашия mixins.py


class CampaignListView(ListView):
    model = Campaign
    template_name = 'campaigns/campaign_list.html'
    context_object_name = 'campaigns'


class CampaignDetailView(LoginRequiredMixin, DetailView):
    model = Campaign
    template_name = 'campaigns/campaign_detail.html'
    context_object_name = 'campaign'


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
        # логика за обработка на подкрепа за кампанията
        # запис в базата данни за подкрепата
        return redirect('campaign_success', pk=campaign.pk)






