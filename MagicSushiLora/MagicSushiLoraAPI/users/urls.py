from django.urls import path
from .views import SushiUserList, UserRegistration, UserLogin, UserLogout

urlpatterns = [
    path('', SushiUserList.as_view(), name='user-list'),
    path('register/', UserRegistration.as_view(), name='user-registration'),
    path('login/', UserLogin.as_view(), name='user-login'),
    path('logout/', UserLogout.as_view(), name='user-logout'),
]
