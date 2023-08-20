from django.core.validators import MinLengthValidator
from django.db import models
from CFamily.users.models import UserProfile


class Donations(models.Model):

    CHOICES = (
        ('Support for research', 'Support for research'),
        ('Psychological support', 'Psychological support'),
        ('Medication', 'Medication'),
        ('Medical Equipment', 'Medical Equipment'),
        ('Another type of donation', 'Another type of donation'),

    )

    title = models.CharField(
        verbose_name='Name',
        max_length=100,
        unique=True,
        validators=[MinLengthValidator(1)],
        null=False,
        blank=False,
    )
    image = models.ImageField(
        verbose_name='Image',
        upload_to='donation_covers/',
        blank=False,
        null=False,
    )
    type = models.CharField(
        verbose_name='Type',
        choices=CHOICES,
        blank=False,
        null=False,
    )

    description = models.TextField(
        verbose_name='Description',
        max_length=5000,
        validators=[MinLengthValidator(1)],
        null=False,
        blank=False,
    )
    donation_price = models.PositiveIntegerField(
        verbose_name='Donation Price',
        null=False,
        blank=False,
    )
    creation_time = models.DateTimeField(auto_now_add=True, )
    date_modified = models.DateTimeField(auto_now=True, )

    creator = models.ForeignKey(
        UserProfile,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title


class MoneyDonation(models.Model):
    user = models.ForeignKey(
        UserProfile,
        on_delete=models.CASCADE,
    )
    amount = models.PositiveIntegerField(
        verbose_name='Donation Amount',
        null=False,
        blank=False,
    )
    creation_time = models.DateTimeField(auto_now_add=True, )

    def __str__(self):
        return f"{self.user.username} - {self.amount} lv"