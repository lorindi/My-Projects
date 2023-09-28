from django.urls import path
from initiatives.views import InitiativeListView, InitiativeDetailView, InitiativeCreateView, InitiativeUpdateView, \
    InitiativeDeleteView, InitiativeRegisterView, AdminInitiativeListView, InitiativeSupportView

urlpatterns = [
    path('', InitiativeListView.as_view(), name='initiative_list'),
    path('<int:pk>/', InitiativeDetailView.as_view(), name='initiative_detail'),
    path('create/', InitiativeCreateView.as_view(), name='initiative_create'),
    path('<int:pk>/update/', InitiativeUpdateView.as_view(), name='initiative_update'),
    path('<int:pk>/delete/', InitiativeDeleteView.as_view(), name='initiative_delete'),
    path('initiative/<int:pk>/support/success/', InitiativeSupportView.as_view(), name='initiative_success'),
    path('<int:pk>/register/', InitiativeRegisterView.as_view(), name='initiative_register'),
    path('admin/initiative/', AdminInitiativeListView.as_view(), name='admin_initiative_list'),

]
