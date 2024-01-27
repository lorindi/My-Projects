from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import SushiUser


class CustomUserAdmin(UserAdmin):
    model = SushiUser
    list_display = ['username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active']
    search_fields = ['username', 'email']


admin.site.register(SushiUser, CustomUserAdmin)
