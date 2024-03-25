from django.urls import path

from users.views import RegisterApiView, LoginApiView, LogoutApiView, UpdateUserApiView, ProfileDetailsAPIView, profile

urlpatterns = [
    path('register/', RegisterApiView.as_view(), name='register'),
    path('login/', LoginApiView.as_view(), name='login'),
    path('logout/', LogoutApiView.as_view(), name='logout'),
    path('update/<int:pk>/', UpdateUserApiView.as_view(), name='update'),
    path('details/<int:pk>/', ProfileDetailsAPIView.as_view(), name='details'),
    path('profile/', profile, name='profile'),

]
