from django.urls import path

from users.views import RegisterApiView, LoginApiView, LogoutApiView, UpdateUserApiView, ProfileDetailsAPIView

urlpatterns = [
    path('register/', RegisterApiView.as_view(), name='register'),
    path('login/', LoginApiView.as_view(), name='login'),
    path('logout/', LogoutApiView.as_view(), name='logout'),
    path('<int:pk>/update/', UpdateUserApiView.as_view(), name='update'),
    path('details/<int:pk>/', ProfileDetailsAPIView.as_view(), name='details'),
]
