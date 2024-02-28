from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['image', 'title', 'description', 'category', 'ingredients_first', 'ingredients_second',
                  'ingredients_third', 'ingredients_fourth', 'ingredients_fifth', 'ingredients_sixth',
                  'ingredients_seventh', 'ingredients_eighth', 'ingredients_ninth', 'ingredients_tenth',
                  'ingredients_eleventh', 'ingredients_twelfth', 'ingredients_eleventh', 'ingredients_twelfth',
                  'ingredients_thirteenth', 'ingredients_fourteenth', 'ingredients_fifteenth', 'prep_time',
                  'cook_time',
                  'servings', 'creation_time', 'creator']

    # def create(self, validated_data):
    #     return Recipe.objects.create(**validated_data)
