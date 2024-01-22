from django.urls import path

from users.views import RegisterUserAPIView, LoginUserAPIView, UserLogoutView

urlpatterns = [
    path('register/', RegisterUserAPIView.as_view(), name='register'),
    path('login/', LoginUserAPIView.as_view(), name='login'),
    path('logout/', UserLogoutView.as_view(), name='logout'),
]
# from .views import RegisterView, LoginView, LogoutView
#
# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', LoginView.as_view(), name='login'),
#     path('logout/', LogoutView.as_view(), name='logout'),
# ]
