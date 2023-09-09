from django.urls import path
from initiatives.views import InitiativeListView, InitiativeDetailView, InitiativeCreateView, InitiativeUpdateView, InitiativeDeleteView

urlpatterns = [
    path('', InitiativeListView.as_view(), name='initiative_list'),
    path('<int:pk>/', InitiativeDetailView.as_view(), name='initiative_detail'),
    path('create/', InitiativeCreateView.as_view(), name='initiative_create'),
    path('<int:pk>/update/', InitiativeUpdateView.as_view(), name='initiative_update'),
    path('<int:pk>/delete/', InitiativeDeleteView.as_view(), name='initiative_delete'),
]
