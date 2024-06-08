from django.urls import path

from accounts.views import UserRegisterView, VerifyUserEmail, LoginUserView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('verify-email/', VerifyUserEmail.as_view(), name='verify_email'),
    path('login/', LoginUserView.as_view(), name='login'),
]
