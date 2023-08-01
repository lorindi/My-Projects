from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .models import MedicationAndMedicalEquipment
from mixins.donations_mixins import GroupRequiredMixin



class DonationCreateView(LoginRequiredMixin,GroupRequiredMixin, CreateView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-create-page.html'
    fields = ['name', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']


    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)



class DonationEditView(LoginRequiredMixin,GroupRequiredMixin, UpdateView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-edit-page.html'
    fields = ['name', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']



class DonationDeleteView(LoginRequiredMixin,GroupRequiredMixin, DeleteView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-delete-page.html'
    success_url = reverse_lazy('donation_list')
    allowed_groups = ['Admins']



class DonationDetailsView(LoginRequiredMixin, DetailView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-details-page.html'
