from django.core.validators import MinLengthValidator
from django.db import models
from django.contrib.auth.models import AbstractUser


class SushiUser(AbstractUser):
    email = models.EmailField(
        max_length=50,
        unique=True,
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    first_name = models.CharField(
        max_length=150,
        null=True,
        blank=True,
    )
    last_name = models.CharField(
        max_length=150,
        null=True,
        blank=True,
    )
    description = models.TextField(
        validators=[MinLengthValidator(5)],
        null=True,
        blank=True,
    )
    profile_picture = models.URLField(
        null=True,
        blank=True,
    )
