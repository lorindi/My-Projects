from django.urls import path, include

from cfamily.profiles.views import ProfileRegisterView, ProfileLogin, ProfileLogOut, ProfileDetailsView, \
    ProfileEditView, ProfileDeleteView, ChangeAccPasswordView, PassChanged, PasswordResetDone, PasswordReset, \
    PasswordResetConfirm, PasswordResetComplete

urlpatterns = [

        path('register/', ProfileRegisterView.as_view(), name='profile register'),
        path('login/', ProfileLogin.as_view(), name='profile login'),
        path('logout/', ProfileLogOut.as_view(), name='profile logout'),
        path('details/<int:pk>/', ProfileDetailsView.as_view(), name='profile details'),
        path('edit/<int:pk>/', ProfileEditView.as_view(), name='profile edit'),
        path('delete/<int:pk>/', ProfileDeleteView.as_view(), name='profile delete'),

        path('<int:pk>/change-password', ChangeAccPasswordView.as_view(), name='change password'),
        path('pass-changed/', PassChanged.as_view(), name='password_change_done'),

        path('pass-reset/', PasswordReset.as_view(), name='reset_password'),
        path('pass-reset-send/', PasswordResetDone.as_view(), name='password_reset_done'),
        path('reset/<uidb64>/<token>/', PasswordResetConfirm.as_view(), name='password_reset_confirm'),
        path('pass-reset-complete/', PasswordResetComplete.as_view(), name='password_reset_complete'),
]