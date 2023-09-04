from django.contrib import admin
from .models import CharitableTrek, TrekRegistration

@admin.register(CharitableTrek)
class CharitableTrekAdmin(admin.ModelAdmin):
    list_display = ['title', 'start_date', 'end_date', 'location']
    list_filter = ['start_date', 'end_date']
    search_fields = ['title', 'location']

@admin.register(TrekRegistration)
class TrekRegistrationAdmin(admin.ModelAdmin):
    list_display = ['user', 'trek', 'registration_date']
    list_filter = ['trek', 'registration_date']
    search_fields = ['user__username', 'user__email']
    date_hierarchy = 'registration_date'
