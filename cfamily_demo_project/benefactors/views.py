from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Benefactor
from mixins.mixins import GroupRequiredMixin


class BenefactorListView(ListView):
    model = Benefactor
    template_name = 'benefactors/benefactor_list.html'
    context_object_name = 'benefactors'
    paginate_by = 1

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class BenefactorDetailView(DetailView):
    model = Benefactor
    template_name = 'benefactors/benefactor_detail.html'
    context_object_name = 'benefactor'


class BenefactorCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins']
    model = Benefactor
    template_name = 'benefactors/benefactor_create.html'
    fields = ['name_benefactor', 'description', 'contact_email', 'contact_phone', 'benefactor_image']
    success_url = reverse_lazy('benefactor_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class BenefactorUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admins']
    model = Benefactor
    template_name = 'benefactors/benefactor_update.html'
    fields = ['name_benefactor', 'description', 'contact_email', 'contact_phone', 'benefactor_image']
    success_url = reverse_lazy('benefactor_list')


class BenefactorDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admins']
    model = Benefactor
    template_name = 'benefactors/benefactor_confirm_delete.html'
    success_url = reverse_lazy('benefactor_list')
