from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404, redirect
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import CreateView, DetailView, ListView, DeleteView, UpdateView
from .models import CharitableTrek, TrekRegistration
from mixins.mixins import GroupRequiredMixin


class CharitableTrekListView(ListView):
    model = CharitableTrek
    template_name = 'charitable_treks/charitable_trek_list.html'
    context_object_name = 'treks'
    paginate_by = 5

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('-creation_time')

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class CharitableTrekDetailView(LoginRequiredMixin, DetailView):
    model = CharitableTrek
    template_name = 'charitable_treks/charitable_trek_detail.html'
    context_object_name = 'trek'


class CharitableTrekCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins', 'Staff']
    model = CharitableTrek
    template_name = 'charitable_treks/charitable_trek_create.html'
    fields = ['title', 'description', 'start_date', 'end_date', 'location', 'organizers', 'cover_image', 'route_map',
              'target_amount']
    success_url = reverse_lazy('charitable_trek_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class CharitableTrekUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admins', 'Staff']
    model = CharitableTrek
    template_name = 'charitable_treks/charitable_trek_update.html'
    fields = ['title', 'description', 'start_date', 'end_date', 'location', 'organizers', 'cover_image', 'route_map',
              'target_amount']
    success_url = reverse_lazy('charitable_trek_list')


class CharitableTrekDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admins', 'Staff']
    model = CharitableTrek
    template_name = 'charitable_treks/charitable_trek_confirm_delete.html'
    success_url = reverse_lazy('charitable_trek_list')


class TrekRegistrationView(LoginRequiredMixin, View):
    def post(self, request, pk):
        trek = get_object_or_404(CharitableTrek, pk=pk)
        registration, created = TrekRegistration.objects.get_or_create(user=request.user, trek=trek)
        return redirect('charitable_trek_detail', pk=trek.pk)


class TrekUnregistrationView(LoginRequiredMixin, View):
    def post(self, request, pk):
        trek = get_object_or_404(CharitableTrek, pk=pk)
        registration = TrekRegistration.objects.filter(user=request.user, trek=trek).first()
        if registration:
            registration.delete()
        return redirect('charitable_trek_detail', pk=trek.pk)
