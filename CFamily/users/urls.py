from django.urls import path, include

from users.views import UserRegisterView, UserLogin, UserLogOut, UserDetailsView, UserEditView, UserDeleteView, \
    ChangeAccPasswordView, PassChanged, PasswordReset, PasswordResetDone, PasswordResetConfirm, PasswordResetComplete, \
    UserDetailsContentInfoView, UserDetailsContentCampaignsView, UserDetailsContentInitiativesView, UserDetailsContentEventsView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user_register'),
    path('login/', UserLogin.as_view(), name='user_login'),
    path('logout/', UserLogOut.as_view(), name='user_logout'),
    path('details/<int:pk>/', include([
        path('', UserDetailsView.as_view(), name='user_details'),
        path('information/', UserDetailsContentInfoView.as_view(), name='user_content_info'),
        path('recorded-campaigns/', UserDetailsContentCampaignsView.as_view(), name='user_content_campaigns'),
        path('recorded-initiatives/', UserDetailsContentInitiativesView.as_view(), name='user_content_initiatives'),
        path('recorded-events/', UserDetailsContentEventsView.as_view(), name='user_content_events'),
    ])),
    # path('details/<int:pk>/', UserDetailsView.as_view(), name='user_details'),
    #
    # path('details/<int:pk>/info/', UserDetailsContentInfoView.as_view(), name='user_content_info'),
    # path('details/<int:pk>/recorded-campaigns/', UserDetailsContentCampaignsView.as_view(), name='user_content_campaigns'),

    path('edit/<int:pk>/', UserEditView.as_view(), name='user_edit'),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name='user_delete'),

    path('<int:pk>/change-password', ChangeAccPasswordView.as_view(), name='change_password'),

    path('pass-changed/', PassChanged.as_view(), name='password_change_done'),
    path('pass-reset/', PasswordReset.as_view(), name='reset_password'),
    path('pass-reset-send/', PasswordResetDone.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', PasswordResetConfirm.as_view(), name='password_reset_confirm'),
    path('pass-reset-complete/', PasswordResetComplete.as_view(), name='password_reset_complete'),

]
