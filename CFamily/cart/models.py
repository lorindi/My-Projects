from django.db import models
from donations.models import Donations, MoneyDonation


class CartItem(models.Model):
    user = models.ForeignKey('users.UserProfile', on_delete=models.CASCADE)
    donation = models.ForeignKey(Donations, on_delete=models.CASCADE)
    money = models.ForeignKey(MoneyDonation, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.quantity} x {self.donation.title}"
