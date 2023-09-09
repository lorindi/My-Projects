from django.urls import path

from donations.views import DonationCreateView, DonationEditView, DonationDeleteView, DonationDetailsView, \
    DonationListView, DonationMedicationsListView, DonationMedicalEquipmentListView, DonationSupportForResearchListView, \
    DonationPsychologicalSupportListView, DonationAnotherTypeListView

urlpatterns = [
    path('', DonationListView.as_view(), name='donation_list'),
    path('support_for_research/', DonationSupportForResearchListView.as_view(), name='donation_support_for_research'),
    path('psychological_support/', DonationPsychologicalSupportListView.as_view(),
         name='donation_psychological_support'),
    path('medications/', DonationMedicationsListView.as_view(), name='donation_medications'),
    path('medical-equipment/', DonationMedicalEquipmentListView.as_view(), name='donation_medical_equipment'),
    path('another_type/', DonationAnotherTypeListView.as_view(), name='donation_another_type'),
    path('create/', DonationCreateView.as_view(), name='donation_create'),
    path('edit/<int:pk>/', DonationEditView.as_view(), name='donation_edit'),
    path('delete/<int:pk>/', DonationDeleteView.as_view(), name='donation_delete'),
    path('details/<int:pk>/', DonationDetailsView.as_view(), name='donation_details'),

]
