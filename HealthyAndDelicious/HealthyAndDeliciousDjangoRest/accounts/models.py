from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import MinLengthValidator
from django.utils.translation import gettext_lazy as _
from .manager import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
        verbose_name=_("Email Address")
        # error_messages={"unique": "Email is not unique."}
    )

    first_name = models.CharField(
        max_length=150,
        null=True,
        blank=True,
        verbose_name=_("First Name")

    )
    last_name = models.CharField(
        max_length=150,
        null=True,
        blank=True,
        verbose_name=_("Last Name")

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
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'

    def tokens(self):
        pass


class OneTimePassword(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f'{self.user.first_name}-passcode'
