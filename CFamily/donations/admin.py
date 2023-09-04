from django.contrib import admin
from .models import Donations


@admin.register(Donations)
class DonationsAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'donation_price', 'creator', 'creation_time')
    list_filter = ('type',)
    search_fields = ('title', 'type', 'creator__username', 'creator__email')
    readonly_fields = ('creation_time', 'date_modified')
    ordering = ('-creation_time',)
