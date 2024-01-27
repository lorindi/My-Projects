from rest_framework import serializers

from sushi.models import Sushi


class SushiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sushi
        fields = '__all__'

    def create(self, validated_data):
        return super().create(validated_data)