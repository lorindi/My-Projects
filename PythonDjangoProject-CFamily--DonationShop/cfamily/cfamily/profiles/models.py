from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import MinLengthValidator

ACCOUNT_CHOICES = (
    ("Donor", "Donor"),
    ("Patient", "Patient"),
    ("Parent/Relative", "Parent/Relative"),
)


class UserProfile(AbstractUser):
    username = models.CharField(
        unique=True,
        verbose_name='Username',
        max_length=30,
        validators=[MinLengthValidator(3)],
        null=False,
        blank=False,

    )
    email = models.EmailField(
        unique=True,
        verbose_name='Email',
        max_length=50,
        validators=[MinLengthValidator(5)],
        null=False,
        blank=False,

    )
    type_user = models.CharField(

        verbose_name='Type',
        choices=ACCOUNT_CHOICES,
        null=False,
        blank=False,
    )

    first_name = models.CharField(
        verbose_name='First Name',
        max_length=30,
        validators=[MinLengthValidator(3)],
        null=True,
        blank=True,

    )

    last_name = models.CharField(
        verbose_name='Last Name',
        max_length=30,
        validators=[MinLengthValidator(3)],
        null=True,
        blank=True,
    )

    @property
    def get_name(self):
        first = ''
        last = ''
        if self.first_name:
            first = self.first_name
        if self.last_name:
            last = self.last_name
        return f"{first} {last}"
