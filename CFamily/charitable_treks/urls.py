from django.urls import path
from charitable_treks.views import (
    CharitableTrekListView, CharitableTrekDetailView, CharitableTrekCreateView,
    CharitableTrekUpdateView, CharitableTrekDeleteView, TrekRegistrationView,
    TrekUnregistrationView
)

urlpatterns = [
    path('', CharitableTrekListView.as_view(), name='charitable_trek_list'),
    path('<int:pk>/', CharitableTrekDetailView.as_view(), name='charitable_trek_detail'),
    path('create/', CharitableTrekCreateView.as_view(), name='charitable_trek_create'),
    path('<int:pk>/update/', CharitableTrekUpdateView.as_view(), name='charitable_trek_update'),
    path('<int:pk>/delete/', CharitableTrekDeleteView.as_view(), name='charitable_trek_delete'),
    path('<int:pk>/register/', TrekRegistrationView.as_view(), name='trek_register'),
    path('<int:pk>/unregister/', TrekUnregistrationView.as_view(), name='trek_unregister'),
]
