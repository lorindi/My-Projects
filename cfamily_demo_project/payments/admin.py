from django.contrib import admin
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ['user', 'total_amount', 'payment_date']
    list_filter = ['user', 'payment_date']
    search_fields = ['user__username', 'user__email']
    date_hierarchy = 'payment_date'

