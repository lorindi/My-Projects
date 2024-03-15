from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator
from django.db import models


class RecipeUser(AbstractUser):
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
        # error_messages={"unique": "Email is not unique."}
    )
    username = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        unique=True,
        # error_messages={"unique": "Username is not unique."}
    )

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

    def __str__(self):
        return self.username
