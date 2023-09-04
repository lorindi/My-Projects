from django.contrib import admin
from users.models import UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'date_of_birth', 'gender')
    list_filter = ('gender',)
    search_fields = ('username', 'email', 'first_name', 'last_name')
    fieldsets = (
        ('Personal Information', {
            'fields': ('username', 'email', 'first_name', 'last_name', 'date_of_birth', 'gender')
        }),
        ('Contact Information', {
            'fields': ('telephone', 'city', 'link')
        }),
        ('Additional Information', {
            'fields': ('side', 'profile_picture')
        }),
    )
    readonly_fields = ('username', 'email')
