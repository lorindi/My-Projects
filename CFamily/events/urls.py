from django.urls import path
from events.views import EventListView, EventDetailView, EventCreateView, EventUpdateView, EventDeleteView, EventRegistrationView, EventUnregistrationView

urlpatterns = [
    path('', EventListView.as_view(), name='event_list'),
    path('<int:pk>/', EventDetailView.as_view(), name='event_detail'),
    path('create/', EventCreateView.as_view(), name='event_create'),
    path('<int:pk>/update/', EventUpdateView.as_view(), name='event_update'),
    path('<int:pk>/delete/', EventDeleteView.as_view(), name='event_delete'),
    path('<int:pk>/register/', EventRegistrationView.as_view(), name='event_register'),
    path('<int:pk>/unregister/', EventUnregistrationView.as_view(), name='event_unregister'),
]
