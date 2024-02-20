from django.db import models
from django.core.validators import MinLengthValidator, MinValueValidator

from users.models import SushiUser


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
        ('uramaki', 'uramaki'),
        ('futomaki', 'futomaki'),
        ('hosomaki', 'hosomaki'),
        ('nigiri', 'nigiri'),
        ('sashimi', 'sashimi'),
        ('poke', 'poke'),
        ('sets', 'sets'),
        ('additives', 'additives'),
        ('salads', 'salads'),
        ('gioza', 'gioza'),
        ('noodles', 'noodles'),
        ('tempura', 'tempura'),
        ('soup', 'soup'),
        ('teppanyaki', 'teppanyaki'),
        ('chicken', 'chicken'),
        ('pork', 'pork'),
        ('fish', 'fish'),
        ('beef', 'beef'),
        ('garnish', 'garnish'),
        ('tataki', 'tataki'),
        ('chirashi', 'chirashi'),
        ('gunkan', 'gunkan'),
        ('yakitori', 'yakitori'),
        ('okonomiyaki', 'okonomiyaki'),
        ('tonkatsu', 'tonkatsu'),
        ('sukiyaki', 'sukiyaki'),
        ('shabu-shabu', 'shabu-shabu'),
        ('udon', 'udon'),
        ('soba', 'soba'),
    )

    category = models.CharField(
        choices=CHOICES,
        validators=[MinLengthValidator(3)],
        max_length=100,
        null=False,
        blank=False,
    )

    ingredients_first = models.CharField(
        null=False,
        blank=False,
    )
    ingredients_second = models.CharField(
        null=False,
        blank=False,
    )
    ingredients_third = models.CharField(
        null=False,
        blank=False,
    )
    ingredients_fourth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_fifth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_sixth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_seventh = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_eighth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_ninth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_tenth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_eleventh = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_twelfth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_thirteenth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_fourteenth = models.CharField(
        null=True,
        blank=True,
    )
    ingredients_fifteenth = models.CharField(
        null=True,
        blank=True,

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
        validators=[MinValueValidator(1)],
        null=False,
        blank=False,
    )
    creation_time = models.DateTimeField(auto_now_add=True, )
    creator = models.ForeignKey(
        SushiUser,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title
