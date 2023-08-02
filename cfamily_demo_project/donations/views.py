from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.shortcuts import redirect, render
from .models import MedicationAndMedicalEquipment
from mixins.donations_mixins import GroupRequiredMixin


class DonationDashboardView(GroupRequiredMixin, View):
    template_name = 'donations/donation-dashboard-lists-page.html'
    allowed_groups = ['Admins']

    def get(self, request):
        medications = MedicationAndMedicalEquipment.objects.filter(type='Medication')
        medical_equipment = MedicationAndMedicalEquipment.objects.filter(type='Medical Equipment')
        context = {
            'medications': medications,
            'medical_equipment': medical_equipment,

        }
        return render(request, self.template_name, context)


class DonationCreateView(LoginRequiredMixin,GroupRequiredMixin, CreateView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-create-page.html'
    fields = ['name', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']
    success_url = 'dashboard'


    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)



class DonationEditView(LoginRequiredMixin,GroupRequiredMixin, UpdateView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-edit-page.html'
    fields = ['name', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']
    success_url = 'dashboard'



class DonationDeleteView(LoginRequiredMixin,GroupRequiredMixin, DeleteView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-delete-page.html'
    success_url = reverse_lazy('donation_list')
    allowed_groups = ['Admins']




class DonationDetailsView(LoginRequiredMixin, DetailView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-details-page.html'
    success_url = 'dashboard'
