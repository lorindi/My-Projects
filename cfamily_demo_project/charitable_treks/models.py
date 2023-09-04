from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class CharitableTrek(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    location = models.CharField(max_length=200)
    organizers = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='charitable_trek_covers/')
    route_map = models.ImageField(upload_to='charitable_trek_routes/', null=True, blank=True)
    target_amount = models.DecimalField(max_digits=10, decimal_places=2)
    participants = models.ManyToManyField(UserModel, through='TrekRegistration')

    def __str__(self):
        return self.title


class TrekRegistration(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    trek = models.ForeignKey(CharitableTrek, on_delete=models.CASCADE)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} registered for {self.trek.title}"

