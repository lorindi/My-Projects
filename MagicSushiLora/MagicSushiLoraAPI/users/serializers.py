from rest_framework import serializers
from .models import SushiUser


# class SushiUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SushiUser
#         fields = ['id', 'email', 'username', 'first_name', 'last_name', 'description', 'profile_picture', 'password']
#         extra_kwargs = {'password': {'write_only': True}}
#
#     def create(self, validated_data):
#         user = SushiUser.objects.create_user(**validated_data)
#         return user
#
#
#
# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True, style={'input_type': 'password'})

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SushiUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = SushiUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user