from django.shortcuts import render
from django.views import View
from django.shortcuts import render, redirect
from payments.models import Payment
from cart.models import CartItem


class PaymentView(View):
    template_name = 'payments/payment.html'

    def get(self, request):
        user = request.user
        cart_items = CartItem.objects.filter(user=user)
        total_amount = sum(item.donation.donation_price * item.quantity for item in cart_items)
        context = {'cart_items': cart_items, 'total_amount': total_amount}
        return render(request, self.template_name, context)

    def post(self, request):
        user = request.user
        cart_items = CartItem.objects.filter(user=user)
        total_amount = sum(item.donation.donation_price * item.quantity for item in cart_items)
        payment = Payment.objects.create(user=user, total_amount=total_amount)
        payment.cart_items.set(cart_items)
        # Тук трябва да добавите логика за интеграция с платежен шлюз
        # След успешно обработено плащане, може да изтриете артикулите от количката
        cart_items.delete()
        return redirect('payment_success')  # Редирект към страница за успешно плащане


class PaymentSuccessView(View):
    template_name = 'payments/payment_success.html'

    def get(self, request):
        return render(request, self.template_name)
