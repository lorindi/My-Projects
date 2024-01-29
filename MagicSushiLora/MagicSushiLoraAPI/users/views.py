from django.contrib.auth import get_user_model
from django.contrib.auth.models import AnonymousUser
from django.utils import timezone
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics

from users.serializers import CreateUserSerializer

UserModel = get_user_model()


# print(UserModel)


class RegisterApiView(generics.CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = CreateUserSerializer


class LoginApiView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        user.last_login = timezone.now()
        user.save()
        # user.update_last_login(None)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        })


class LogoutApiView(APIView):
    def get(self, request, *args, **kwargs):
        return self.__perform_logout(request)

    def post(self, request, *args, **kwargs):
        return self.__perform_logout(request)

    @staticmethod
    def __perform_logout(request):
        if not isinstance(request.user, AnonymousUser):
            request.user.auth_token.delete()
            return Response({'message': 'user logged out'})
        else:
            return Response({'message': 'user not authenticated'})
    # def __perform_logout(request):
    #     request.user.auth_token.delete()
    #     return Response({'message': 'user logged out'})
