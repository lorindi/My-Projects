from django.urls import path

from users.views import UserRegisterView, UserLogin, UserLogOut, UserDetailsView, UserEditView, UserDeleteView, \
    ChangeAccPasswordView, PassChanged, PasswordReset, PasswordResetDone, PasswordResetConfirm, PasswordResetComplete

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user register'),
    path('login/', UserLogin.as_view(), name='user login'),
    path('logout/', UserLogOut.as_view(), name='user logout'),
    path('details/<int:pk>/', UserDetailsView.as_view(), name='user details'),
    path('edit/<int:pk>/', UserEditView.as_view(), name='user edit'),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name='user delete'),

    path('<int:pk>/change-password', ChangeAccPasswordView.as_view(), name='change password'),

    path('pass-changed/', PassChanged.as_view(), name='password_change_done'),
    path('pass-reset/', PasswordReset.as_view(), name='reset_password'),
    path('pass-reset-send/', PasswordResetDone.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', PasswordResetConfirm.as_view(), name='password_reset_confirm'),
    path('pass-reset-complete/', PasswordResetComplete.as_view(), name='password_reset_complete'),
]