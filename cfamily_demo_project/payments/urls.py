from django.urls import path
from payments.views import PaymentView, PaymentSuccessView

urlpatterns = [
    path('', PaymentView.as_view(), name='payment'),
    path('success/', PaymentSuccessView.as_view(), name='payment_success'),
]
