from django.urls import path
from cart.views import AddToCartView, CartListView, CartAddView, CartUpdateView, CartDeleteView, CartDetailView


urlpatterns = [

    path('add-to-cart/<int:pk>/', AddToCartView.as_view(), name='add_to_cart'),
    path('', CartListView.as_view(), name='cart_list'),
    path('add/', CartAddView.as_view(), name='cart_add'),
    path('update/<int:pk>/', CartUpdateView.as_view(), name='cart_update'),
    path('delete/<int:pk>/', CartDeleteView.as_view(), name='cart_delete'),
    path('detail/<int:pk>/', CartDetailView.as_view(), name='cart_detail'),
]
