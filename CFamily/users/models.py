from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    username = models.CharField(
        # default='Not specified',
        verbose_name='Username',
        max_length=50,
        unique=True,
        null=False,
        blank=False,
    )
    first_name = models.CharField(
        # default='Not specified',
        verbose_name="First name",
        max_length=150,
        null=True,
        blank=True,
    )
    last_name = models.CharField(
        # default='Not specified',
        verbose_name="Last name",
        max_length=150,
        null=True,
        blank=True,
    )
    email = models.CharField(
        # default='Not specified',
        verbose_name='Email',
        max_length=100,
        unique=True,
        null=False,
        blank=False,
    )
    TYPE_USER_CHOICES = (
        ('Parent of a patient', 'Parent of a patient'),
        ('Patient', 'Patient'),
        ('Donor', 'Donor'),
        ('Other', 'Other'),
    )
    type_user = models.CharField(
        verbose_name='Type user',
        choices=TYPE_USER_CHOICES,
        max_length=25,
        null=True,
        blank=True,

    )
    profile_picture = models.ImageField(
        # default='Not specified',
        verbose_name='Profile picture',
        upload_to="profile_pictures/",
        null=True,
        blank=True,
    )
    date_of_birth = models.DateField(
        # default='Not specified',
        verbose_name='Date of birth',
        null=True,
        blank=True,

    )

    CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    )

    gender = models.CharField(
        # default='Not specified',
        verbose_name='Gender',
        choices=CHOICES,
        max_length=10,
        null=True,
        blank=True,
    )

    telephone = models.CharField(
        # default='Not specified',
        verbose_name='Telephone',
        null=True,
        blank=True,
    )

    side = models.CharField(
        # default='Not specified',
        verbose_name='Side',
        max_length=100,
        null=True,
        blank=True,
    )
    city = models.CharField(
        # default='Not specified',
        verbose_name='City',
        max_length=100,
        null=True,
        blank=True,
    )

    link = models.URLField(
        # default='Not specified',
        verbose_name='Web sites',
        null=True,
        blank=True,
    )

    @property
    def get_name(self):
        first = ''
        last = ''
        if self.first_name and self.last_name:
            first = self.first_name
            last = self.last_name
            return f"{first} {last}"
        elif self.first_name and not self.last_name:
            if self.first_name:
                first = self.first_name
                return f"{first}"
        elif not self.first_name and self.last_name:
            if self.last_name:
                last = self.last_name
                return f"{last}"
        else:
            return f"Not specified"

    def get_username(self):
        return f'{self.username}'
