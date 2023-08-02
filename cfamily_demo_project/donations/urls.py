from django.urls import path

from donations.views import DonationCreateView, DonationEditView, DonationDeleteView, DonationDetailsView, \
    DonationDashboardView

urlpatterns = [
    path('', DonationDashboardView.as_view(), name='dashboard'),
    path('create/', DonationCreateView.as_view(), name='donation create'),
    path('edit/<int:pk>/', DonationEditView.as_view(), name='donation edit'),
    path('delete/<int:pk>/', DonationDeleteView.as_view(), name='donation delete'),
    path('details/<int:pk>/', DonationDetailsView.as_view(), name='donation details'),

]
