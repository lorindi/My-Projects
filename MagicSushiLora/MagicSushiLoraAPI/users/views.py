from django.contrib.auth import get_user_model
from django.contrib.auth.models import AnonymousUser
from django.utils import timezone
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status

from users.serializers import CreateUserSerializer, UpdateUserSerializer

UserModel = get_user_model()


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


class UpdateUserApiView(generics.RetrieveUpdateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UpdateUserSerializer

    def get(self, request, pk):
        user = get_object_or_404(UserModel, pk=pk)
        serializer = UpdateUserSerializer(user)
        return Response(serializer.data)

    def post(self, request, pk):
        user = get_object_or_404(UserModel, pk=pk)
        serializer = UpdateUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
