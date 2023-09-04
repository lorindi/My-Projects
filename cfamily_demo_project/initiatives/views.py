from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Initiative
from mixins.mixins import GroupRequiredMixin

class InitiativeListView(ListView):
    model = Initiative
    template_name = 'initiatives/initiative_list.html'
    context_object_name = 'initiatives'
    paginate_by = 1
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('-created_at')
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context

class InitiativeDetailView(DetailView):
    model = Initiative
    template_name = 'initiatives/initiative_detail.html'
    context_object_name = 'initiative'

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
