from django.db import models
from django.core.validators import MinLengthValidator, MinValueValidator

from users.models import RecipeUser


class Recipe(models.Model):
    image = models.URLField(null=True, blank=True)
    title = models.CharField(
        max_length=200,
        validators=[MinLengthValidator(3)],
        blank=False,
        null=False,
    )

    description = models.TextField(
        validators=[MinLengthValidator(5)],
        blank=False,
        null=False,
    )

    CHOICES = (
        ('', ''),
        ('breakfast', 'breakfast'),
        ('lunch', 'lunch'),
        ('dinner', 'dinner'),
        ('snack', 'snack'),
        ('vegetarian', 'vegetarian'),
        ('vegan', 'vegan'),
        ('gluten-free', 'gluten-free'),
        ('dairy-free', 'dairy-free'),
        ('low-carb', 'low-carb'),
        ('low-calorie', 'low-calorie'),
        ('high-protein', 'high-protein'),
        ('pescatarian', 'pescatarian'),
        ('keto', 'keto'),
        ('paleo', 'paleo'),
        ('mediterranean', 'mediterranean'),
        ('whole30', 'whole30'),
    )

    category = models.CharField(
        choices=CHOICES,
        validators=[MinLengthValidator(3)],
        max_length=100,
        null=False,
        blank=False,
    )

    ingredients = models.CharField(
        null=False,
        blank=False,
    )

    prep_time = models.CharField(
        null=False,
        blank=False,
    )
    cook_time = models.CharField(
        null=False,
        blank=False,
    )

    servings = models.CharField(
        null=False,
        blank=False,
    )
    creation_time = models.DateTimeField(auto_now_add=True, )
    creator = models.ForeignKey(
        RecipeUser,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title
