from django.db import models
from django.core.validators import MinLengthValidator


class Recipe(models.Model):
    title = models.CharField(
        max_length=200

    )
    description = models.TextField(
        validators=[MinLengthValidator(5)],

    )
    category = models.CharField(
        validators=[MinLengthValidator(2)],

    )
    type = models.CharField(
        
    )
    ingredients = models.CharField(
    )
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    servings = models.IntegerField()

    def __str__(self):
        return self.title
