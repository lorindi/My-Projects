from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

    def create(self, validated_data):
        print(validated_data)
        return Recipe.objects.create(**validated_data)

