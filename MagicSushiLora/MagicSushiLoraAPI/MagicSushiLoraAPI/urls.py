from django.contrib import admin
from django.db import router
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),  # Включваме URL маршрутите на вашето приложение за потребители
]
