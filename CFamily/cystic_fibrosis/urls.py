from django.urls import path

from cystic_fibrosis.views import CysticFibrosisCreateView, CysticFibrosisUpdateView, CysticFibrosisDeleteView, \
    CysticFibrosisDetailsView, CysticFibrosisListView, CysticFibrosisDiagnosedListView, CysticFibrosisTreatListView

urlpatterns = [
    path('create/', CysticFibrosisCreateView.as_view(), name='cf_create'),
    path('edit/<int:pk>/', CysticFibrosisUpdateView.as_view(), name='cf_update'),
    path('delete/<int:pk>/', CysticFibrosisDeleteView.as_view(), name='cf_delete'),
    path('details/<int:pk>/', CysticFibrosisDetailsView.as_view(), name='cf_details'),
    path('cf_list/', CysticFibrosisListView.as_view(), name='cf_list'),

    path('diagnosed/', CysticFibrosisDiagnosedListView.as_view(), name='cf_diagnosed'),
    path('treatment/', CysticFibrosisTreatListView.as_view(), name='cf_treatment'),

]
