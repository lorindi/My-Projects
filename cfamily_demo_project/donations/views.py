from django.views import View
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView, ListView
from django.urls import reverse_lazy
from django.shortcuts import redirect, render
from .models import MedicationAndMedicalEquipment
from mixins.mixins import GroupRequiredMixin

from django.core.paginator import Paginator, Page


class DonationsMedicationsListView(View):
    template_name = 'donations/donations-medications-list.html'

    def get(self, request):
        medications = MedicationAndMedicalEquipment.objects.filter(type='Medication')
        donations = MedicationAndMedicalEquipment.objects.all()
        context = {'medications': medications, }
        return render(request, self.template_name, context)


class DonationsMedicalEquipmentListView(View):
    template_name = 'donations/donations-medical-equipment-list.html'

    def get(self, request):
        medical_equipment = MedicationAndMedicalEquipment.objects.filter(type='Medical Equipment')

        context = {'medical_equipment': medical_equipment, }
        return render(request, self.template_name, context)


class DonationDashboardView(View):
    template_name = 'donations/donation-dashboard-lists-page.html'

    paginate_by = 4

    def get(self, request):
        all_medications = MedicationAndMedicalEquipment.objects.filter(type='Medication')
        all_medical_equipment = MedicationAndMedicalEquipment.objects.filter(type='Medical Equipment')

        medications_paginator = Paginator(all_medications, self.paginate_by)
        medical_equipment_paginator = Paginator(all_medical_equipment, self.paginate_by)

        medications_page_number = request.GET.get('medications_page')
        medical_equipment_page_number = request.GET.get('medical_equipment_page')

        medications_page = medications_paginator.get_page(medications_page_number)
        medical_equipment_page = medical_equipment_paginator.get_page(medical_equipment_page_number)

        context = {
            'medications': medications_page,
            'medical_equipment': medical_equipment_page,
        }
        return render(request, self.template_name, context)


class DonationCreateView(GroupRequiredMixin, CreateView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-create-page.html'
    fields = ['name', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']
    success_url = 'dashboard'

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class DonationEditView(GroupRequiredMixin, UpdateView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-edit-page.html'
    fields = ['name', 'image', 'type', 'description', 'donation_price']
    allowed_groups = ['Admins']
    success_url = reverse_lazy('dashboard')


class DonationDeleteView(GroupRequiredMixin, DeleteView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-delete-page.html'
    # success_url = reverse_lazy('donation_list')
    success_url = reverse_lazy('dashboard')
    allowed_groups = ['Admins']


class DonationDetailsView(DetailView):
    model = MedicationAndMedicalEquipment
    template_name = 'donations/donation-details-page.html'
    success_url = 'dashboard'
