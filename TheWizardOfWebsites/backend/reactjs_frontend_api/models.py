import re
import uuid
from django.core.exceptions import ValidationError
from django.db import models


def phone_validator(value):
    if not re.match(r'^08\d{8}$', value):
        raise ValidationError("Phone number must be in the format: '08xxxxxxxx'. 'x' represents a digit (0-9).")


class Profile(models.Model):
    id = models.CharField(primary_key=True, default='', max_length=400, )

    username = models.CharField(
        max_length=50,
        unique=True,
        null=False,
        blank=False,
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
    email = models.CharField(
        max_length=100,
        unique=True,
        null=False,
        blank=False,
    )
    profile_picture = models.ImageField(
        upload_to='profile-picture/',
        blank=True,
        null=True,
    )

    phone_number = models.CharField(
        validators=[phone_validator, ],
        max_length=17,
        blank=True,
        null=True,

    )
