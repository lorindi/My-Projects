from django.shortcuts import render
from django.views import generic, View

from donations.models import MedicationAndMedicalEquipment


class HomePage(generic.TemplateView):
    template_name = 'common/home-page.html'

class DonationsHomePage(generic.TemplateView):
    template_name = 'common/donations-home-page.html'


class DonationsMedicationsListView(View):
    template_name = 'common/donations-medications-list.html'

    def get(self, request):
        medications = MedicationAndMedicalEquipment.objects.filter(type='Medication')

        context = {
            'medications': medications,

        }
        return render(request, self.template_name, context)


class DonationsMedicalEquipmentListView(View):
    template_name = 'common/donations-medical-equipment-list.html'

    def get(self, request):
        medical_equipment = MedicationAndMedicalEquipment.objects.filter(type='Medical Equipment')

        context = {
            'medical_equipment': medical_equipment,

        }
        return render(request, self.template_name, context)