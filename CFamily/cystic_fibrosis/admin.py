from django.contrib import admin
from .models import CysticFibrosis

@admin.register(CysticFibrosis)
class CysticFibrosisAdmin(admin.ModelAdmin):
    list_display = ['title', 'creator', 'creation_time', 'date_modified']
    list_filter = ['creation_time', 'date_modified']
    search_fields = ['title', 'creator__user__username', 'creator__user__email']
    date_hierarchy = 'creation_time'
