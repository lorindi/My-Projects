from django.views.generic import CreateView, DetailView, UpdateView, DeleteView, ListView
from django.shortcuts import redirect, get_object_or_404
from django.urls import reverse_lazy
from .models import CartItem
from donations.models import MedicationAndMedicalEquipment
from django.shortcuts import render, redirect
from django.views import View
from .models import CartItem
from donations.models import MedicationAndMedicalEquipment





class AddToCartView(View):

    def post(self, request, pk):
        donation = MedicationAndMedicalEquipment.objects.get(pk=pk)
        quantity = int(request.POST.get('quantity', 1))
        user = request.user
        cart_item, created = CartItem.objects.get_or_create(user=user, donation=donation)
        cart_item.quantity += quantity
        cart_item.save()
        return redirect('cart_list')


class CartListView(View):
    template_name = 'cart/cart_list.html'

    def get(self, request):
        cart_items = CartItem.objects.filter(user=request.user)
        context = {'cart_items': cart_items}
        return render(request, self.template_name, context)


class CartAddView(CreateView):
    model = CartItem
    fields = ['donation', 'quantity']
    template_name = 'cart/cart_add.html'
    success_url = reverse_lazy('cart_list')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class CartUpdateView(UpdateView):
    model = CartItem
    fields = ['quantity']
    template_name = 'cart/cart_update.html'
    success_url = reverse_lazy('cart_list')


class CartDeleteView(DeleteView):
    model = CartItem
    template_name = 'cart/cart_confirm_delete.html'
    success_url = reverse_lazy('cart_list')


class CartDetailView(DetailView):
    model = CartItem
    template_name = 'cart/cart_detail.html'
    context_object_name = 'cart_item'
