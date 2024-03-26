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
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('dinner', 'Dinner'),
        ('snack', 'Snack'),
        ('vegetarian', 'Vegetarian'),
        ('vegan', 'Vegan'),
        ('gluten_free', 'Gluten-Free'),
        ('dairy_free', 'Dairy-Free'),
        ('low_carb', 'Low Carb'),
        ('low_calorie', 'Low Calorie'),
        ('high_protein', 'High Protein'),
        ('pescatarian', 'Pescatarian'),
        ('keto', 'Keto'),
        ('paleo', 'Paleo'),
        ('mediterranean', 'Mediterranean'),
        ('whole30', 'Whole30'),
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
