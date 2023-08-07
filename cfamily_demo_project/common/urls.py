from django.urls import path, include

from common.views import HomePage, DonationsMedicationsListView, DonationsMedicalEquipmentListView, DonationsHomePage

urlpatterns = [

    path('', HomePage.as_view(), name='homepage'),
    path('donations/', DonationsHomePage.as_view(), name='donations homepage'),
    path('medications/', DonationsMedicationsListView.as_view(), name='donations medications'),
    path('medical-equipment/', DonationsMedicalEquipmentListView.as_view(), name='donations medical equipment'),

]
