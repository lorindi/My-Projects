from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import MedicationAndMedicalEquipment

@admin.register(MedicationAndMedicalEquipment)
class MedicationAndMedicalEquipmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'donation_price', 'creator', 'creation_time')
    list_filter = ('type',)
    search_fields = ('name', 'type', 'creator__username', 'creator__email')
    readonly_fields = ('creation_time', 'date_modified')
    ordering = ('-creation_time',)

