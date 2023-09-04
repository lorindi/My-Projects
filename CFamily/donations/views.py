from django.views.generic import DetailView, UpdateView, DeleteView, ListView
from django.urls import reverse_lazy
from .models import Donations
from mixins.mixins import GroupRequiredMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView
from .models import MoneyDonation


class DonationMoneyCreateView(LoginRequiredMixin, CreateView):
    model = MoneyDonation
    template_name = 'donations/donation-create-money.html'
    fields = ['amount']

    def form_valid(self, form):
        user_profile = self.request.user
        form.instance.user = user_profile
        response = super().form_valid(form)
        # Add logic to add the donation to the cart here
        return response

    success_url = reverse_lazy('donation_list')


class DonationSupportForResearchListView(LoginRequiredMixin, ListView):
    model = Donations
    template_name = 'donations/donation-support-for-research-list.html'
    context_object_name = 'support_for_research'
    queryset = Donations.objects.filter(type='Support for research').order_by('-creation_time')
    paginate_by = 5

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class DonationPsychologicalSupportListView(LoginRequiredMixin, ListView):
    model = Donations
    template_name = 'donations/donation-psychological-support-list.html'
    context_object_name = 'psychological_support'
    queryset = Donations.objects.filter(type='Psychological support').order_by('-creation_time')
    paginate_by = 5

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class DonationMedicationsListView(LoginRequiredMixin, ListView):
    model = Donations
    template_name = 'donations/donation-medications-list.html'
    context_object_name = 'medications'
    queryset = Donations.objects.filter(type='Medication').order_by('-creation_time')
    paginate_by = 5

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class DonationMedicalEquipmentListView(LoginRequiredMixin, ListView):
    model = Donations
    template_name = 'donations/donation-medical-equipment-list.html'
    context_object_name = 'medical_equipment'
    queryset = Donations.objects.filter(type='Medical Equipment').order_by('-creation_time')
    paginate_by = 5

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class DonationAnotherTypeListView(LoginRequiredMixin, ListView):
    model = Donations
    template_name = 'donations/donation-another-type-of-donation-list.html'
    context_object_name = 'another_types'
    queryset = Donations.objects.filter(type='Another type of donation').order_by('-creation_time')
    paginate_by = 5

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class DonationListView(LoginRequiredMixin, ListView):
    model = Donations
    context_object_name = 'donations'
    template_name = 'donations/donation-list.html'
    paginate_by = 5

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class DonationCreateView(LoginRequiredMixin, CreateView):
    allowed_groups = ['Admins']
    model = Donations
    template_name = 'donations/donation-create-page.html'
    fields = ['title', 'image', 'type', 'description', 'donation_price']
    success_url = reverse_lazy('donation_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class DonationEditView(GroupRequiredMixin, UpdateView):
    model = Donations
    template_name = 'donations/donation-edit-page.html'
    fields = ['title', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']
    success_url = reverse_lazy('donation_list')


class DonationDeleteView(GroupRequiredMixin, DeleteView):
    model = Donations
    template_name = 'donations/donation-delete-page.html'
    success_url = reverse_lazy('donation_list')
    allowed_groups = ['Admins']


class DonationDetailsView(LoginRequiredMixin, DetailView):
    model = Donations
    template_name = 'donations/donation-details-page.html'
    success_url = reverse_lazy('donation_list')
