from django.contrib import admin
from .models import Benefactor

@admin.register(Benefactor)
class BenefactorAdmin(admin.ModelAdmin):
    list_display = ['name_benefactor', 'creation_date', 'total_donations']
    search_fields = ['name_benefactor', 'description']
    date_hierarchy = 'creation_date'

