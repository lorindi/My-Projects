from django.shortcuts import render, redirect
from django.views import View
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

        for cart_item in cart_items:
            payment.cart_items.add(cart_item)


        cart_items.delete()
        return redirect('payment_success')


class PaymentSuccessView(View):
    template_name = 'payments/payment_success.html'

    def get(self, request):
        return render(request, self.template_name)

