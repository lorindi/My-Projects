from django.contrib import admin
from .models import Benefactor

@admin.register(Benefactor)
class BenefactorAdmin(admin.ModelAdmin):
    list_display = ['name', 'creation_time', 'total_donations']
    search_fields = ['name', 'description']
    date_hierarchy = 'creation_time'

