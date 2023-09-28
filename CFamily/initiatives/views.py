from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Initiative, InitiativeRegistration
from mixins.mixins import GroupRequiredMixin

class AdminInitiativeListView(ListView):
    template_name = 'initiatives/admin_initiative_list.html'
    model = Initiative
    context_object_name = 'initiatives'
    paginate_by = 10

    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['registrations'] = InitiativeRegistration.objects.all()
        return context


class InitiativeRegisterView(View):
    template_name = 'initiatives/initiative_register.html'

    def get(self, request, pk):
        initiative = Initiative.objects.get(pk=pk)
        context = {'initiative': initiative}
        return render(request, self.template_name, context)

    def post(self, request, pk):
        initiative = Initiative.objects.get(pk=pk)
        user = request.user

        if not InitiativeRegistration.objects.filter(initiative=initiative, user=user).exists():
            registration = InitiativeRegistration.objects.create(initiative=initiative, user=user)
            registration.save()

        return redirect('initiative_success', pk=initiative.pk)

class InitiativeListView(ListView):
    model = Initiative
    template_name = 'initiatives/initiative_list.html'
    context_object_name = 'initiatives'
    paginate_by = 1

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('-creation_time')

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class InitiativeDetailView(DetailView):
    model = Initiative
    template_name = 'initiatives/initiative_detail.html'
    context_object_name = 'initiative'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user_type'] = self.request.user.type_user.lower() if self.request.user.is_authenticated else ''
        context['user_already_registered'] = InitiativeRegistration.objects.filter(initiative=context['initiative'],
                                                                                 user=self.request.user).exists()
        return context

    def post(self, request, pk):
        return redirect('initiative_detail', pk=pk)


class InitiativeCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins']
    model = Initiative
    template_name = 'initiatives/initiative_create.html'
    fields = ['title', 'description', 'purpose', 'image', 'target_amount', 'start_date', 'youtube_link']
    success_url = reverse_lazy('initiative_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class InitiativeUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admins']
    model = Initiative
    template_name = 'initiatives/initiative_update.html'
    fields = ['title', 'description', 'purpose', 'image', 'target_amount', 'start_date', 'youtube_link']
    success_url = reverse_lazy('initiative_list')


class InitiativeDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admins']
    model = Initiative
    template_name = 'initiatives/initiative_confirm_delete.html'
    success_url = reverse_lazy('initiative_list')


class InitiativeSupportView(LoginRequiredMixin, View):
    template_name = 'initiatives/initiative_support.html'

    def get(self, request, pk):
        initiative = Initiative.objects.get(pk=pk)
        context = {'initiative': initiative}
        return render(request, self.template_name, context)

    def post(self, request, pk):
        initiative = Initiative.objects.get(pk=pk)
        return redirect('initiative_success', pk=initiative.pk)
