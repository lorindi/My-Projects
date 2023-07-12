from django.contrib import admin

from django.contrib import admin

from cfamily.profiles.models import UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    pass
