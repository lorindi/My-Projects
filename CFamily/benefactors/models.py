from django.core.validators import MinLengthValidator
from django.db import models

from users.models import UserProfile


class Benefactor(models.Model):

    name = models.CharField(
        null=True,
        blank=True,
    )

    description = models.TextField(
        validators=[MinLengthValidator(5)],
    )

    contact_email = models.EmailField(
        null=True,
        blank=True,
    )

    contact_phone = models.CharField(
        max_length=20,
        null=True,
        blank=True,
    )
    image = models.ImageField(upload_to='benefactor_covers/',null=True,
        blank=True,)

    total_donations = models.DecimalField(max_digits=10, decimal_places=2, default=0, null=True,
        blank=True,)

    creation_time = models.DateTimeField(auto_now_add=True, )


    creator = models.ForeignKey(
        UserProfile,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name