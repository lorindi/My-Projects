from django.core.validators import MinLengthValidator
from django.db import models
from users.models import UserProfile
from .validators import image_size_validator_3mb

class MedicationAndMedicalEquipment(models.Model):

    CHOICES = (
        ('Medication', 'Medication'),
        ('Medical Equipment', 'Medical Equipment'),

    )

    name = models.CharField(
        verbose_name='Name',
        max_length=50,
        unique=True,
        validators=[MinLengthValidator(3)],
        null=False,
        blank=False,
    )
    image = models.ImageField(
        verbose_name='Image',
        validators=(image_size_validator_3mb,),
        upload_to="photos",
        blank = False,
        null = False,
    )
    type = models.CharField(
        verbose_name='Type',
        choices=CHOICES,
        blank=False,
        null=False,
    )

    description = models.TextField(
        verbose_name='Description',
        max_length=300,
        validators=[MinLengthValidator(5)],
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
        return self.name
