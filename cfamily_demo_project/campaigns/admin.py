from django.contrib import admin
from .models import Campaign

@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    list_display = ['title', 'creator', 'start_date', 'end_date']
    list_filter = ['start_date', 'end_date']
    search_fields = ['title', 'creator__user__username', 'creator__user__email']
    date_hierarchy = 'start_date'
