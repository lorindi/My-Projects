# from asyncio import exceptions
# from django.contrib.auth import get_user_model
# from rest_framework import serializers
# from django.contrib.auth import password_validation
#
# UserModel = get_user_model()
#
#
# class CreateUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = ('email', 'username', 'password')
#
#     # This hashes the password (Not save in plain-text in the DB)
#     def create(self, validated_data):
#         user = super().create(validated_data)
#
#         user.set_password(user.password)
#         user.save()
#
#         return user
#
#     def validate(self, data):
#         # Invoke password validators
#         user = UserModel(**data)
#         password = data.get('password')
#         errors = {}
#         try:
#             password_validation.validate_password(password, user)
#         except exceptions.ValidationError as e:
#             errors['password'] = list(e.messages)
#         if errors:
#             raise serializers.ValidationError(errors)
#         return super().validate(data)
#
#     # This removes password from the response
#     def to_representation(self, instance):
#         # return {}
#         user_representation = super().to_representation(instance)
#         user_representation.pop('password')
#         return user_representation
#
#
# class UpdateUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = get_user_model()
#         fields = ['username', 'email', 'first_name', 'last_name', 'description', 'profile_picture']
#
#
# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = get_user_model()
#         fields = ('id', 'username', 'email', 'first_name', 'last_name', 'description', 'profile_picture')
