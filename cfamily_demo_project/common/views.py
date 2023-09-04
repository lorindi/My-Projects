from django.shortcuts import render
from django.views import generic, View

from donations.models import MedicationAndMedicalEquipment


class HomePage(generic.TemplateView):
    template_name = 'common/home-page.html'



