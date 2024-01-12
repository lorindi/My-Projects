from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DeleteView, DetailView, ListView
from cystic_fibrosis.models import CysticFibrosis
from mixins.mixins import GroupRequiredMixin

class CysticFibrosisDiagnosedListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_diagnosed.html'
    context_object_name = 'cf_diagnosed'
    queryset = CysticFibrosis.objects.filter(title='How is cystic fibrosis diagnosed?').order_by('-creation_time')

class CysticFibrosisTreatListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_treatment.html'
    context_object_name = 'cf'
    queryset = CysticFibrosis.objects.filter(title='How is cystic fibrosis treated?').order_by('-creation_time')


class CysticFibrosisListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    context_object_name = 'cf'
    template_name = 'cystic_fibrosis/cf_list.html'
    # items = CysticFibrosis.objects
    # .filter(title='Psychological support').order_by('-creation_time')
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['items'] = CysticFibrosis.objects.all()
        # print(context['items'])
        return context


class CysticFibrosisCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins', 'Staff']
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_create.html'
    fields = ['title', 'cover_image', 'description', 'image', 'youtube_link']
    success_url = reverse_lazy('cf_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class CysticFibrosisUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admin', 'Staff']
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_update.html'
    fields = ['title', 'cover_image', 'description', 'image', 'youtube_link']
    success_url = reverse_lazy('cf_list')


class CysticFibrosisDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admin', 'Staff']
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_delete.html'
    success_url = reverse_lazy('cf_list')


class CysticFibrosisDetailsView(LoginRequiredMixin, DetailView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_details.html'
    success_url = reverse_lazy('cf_list')
