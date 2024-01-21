import pdb

from django.http import JsonResponse
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from .models import SushiUser
from .serializers import SushiUserSerializer


class SushiUserList(generics.ListAPIView):
    queryset = SushiUser.objects.all()
    serializer_class = SushiUserSerializer



class UserRegistration(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        pdb.set_trace()  # Добавя breakpoint
        serializer = SushiUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            Token.objects.create(user=user)
            return Response(serializer.data, status=201)
        print("User registration failed. Errors:", serializer.errors)

        return Response(serializer.errors, status=400)


class UserLogin(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user_id': user.id})
        return Response({'error': 'Invalid credentials'}, status=401)


class UserLogout(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'message': 'Logout successful'}, status=200)
