from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):

    username = models.CharField(
        verbose_name='Username',
        unique=True,
        null=False,
        blank=False,
    )
    email = models.CharField(
        verbose_name='Email',
        unique=True,
        null=False,
        blank=False,
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

    def get_username(self):
        return f'{self.username}'
