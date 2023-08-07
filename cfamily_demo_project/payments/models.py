from django.db import models
from django.contrib.auth import get_user_model
from cart.models import CartItem

UserModel = get_user_model()

class Payment(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    cart_items = models.ManyToManyField(CartItem)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment by {self.user.username} on {self.payment_date}"

