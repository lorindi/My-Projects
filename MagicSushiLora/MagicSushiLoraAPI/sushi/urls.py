from django.urls import path

from sushi.views import ListSushiAPIView

urlpatterns = [
    path('sushi/', ListSushiAPIView.as_view(), name='-api-sushi-list'),
]