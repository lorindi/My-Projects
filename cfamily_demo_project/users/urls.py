from django.urls import path

from users.views import UserRegisterView, UserLogin, UserLogOut, UserDetailsView, UserEditView, UserDeleteView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user register'),
    path('login/', UserLogin.as_view(), name='user login'),
    path('logout/', UserLogOut.as_view(), name='user logout'),
    path('details/<int:pk>/', UserDetailsView.as_view(), name='user details'),
    path('edit/<int:pk>/', UserEditView.as_view(), name='user edit'),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name='user delete'),
]