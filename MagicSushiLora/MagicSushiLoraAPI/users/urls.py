from django.urls import path
from .views import SushiUserList

urlpatterns = [
    path('', SushiUserList.as_view(), name='user-list'),
]