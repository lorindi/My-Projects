from django.contrib import admin
from .models import Initiative

@admin.register(Initiative)
class InitiativeAdmin(admin.ModelAdmin):
    list_display = ['title', 'start_date', 'target_amount']
    list_filter = ['start_date']
    search_fields = ['title']
    date_hierarchy = 'start_date'
