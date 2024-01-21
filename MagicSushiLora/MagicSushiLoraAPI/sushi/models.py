from django.core.validators import MinLengthValidator
from django.db import models

from users.models import SushiUser


class Sushi(models.Model):
    image = models.URLField(
        null=False,
        blank=False,
    )

    title = models.CharField(
        unique=True,
        validators=[MinLengthValidator(3)],
        null=False,
        blank=False,
    )
    description = models.TextField(
        validators=[MinLengthValidator(15)],
        null=False,
        blank=False,
    )

    title_first_topic = models.CharField(
        validators=[MinLengthValidator(3)],
        null=False,
        blank=False,
    )
    description_first_topic = models.CharField(
        validators=[MinLengthValidator(15)],
        null=False,
        blank=False,
    )
    title_second_topic = models.CharField(
        validators=[MinLengthValidator(3)],
        null=False,
        blank=False,
    )
    description_second_topic = models.CharField(
        validators=[MinLengthValidator(15)],
        null=False,
        blank=False,
    )
    title_third_topic = models.CharField(
        validators=[MinLengthValidator(3)],
        null=False,
        blank=False,
    )
    description_third_topic = models.CharField(
        validators=[MinLengthValidator(15)],
        null=False,
        blank=False,
    )
    creation_time = models.DateTimeField(auto_now_add=True, )

    creator = models.ForeignKey(
        SushiUser,
        on_delete=models.CASCADE,
    )
