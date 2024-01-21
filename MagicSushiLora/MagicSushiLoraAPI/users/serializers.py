from rest_framework import serializers
from .models import SushiUser


class SushiUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SushiUser
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'description', 'profile_picture']
