from rest_framework import generics
from .models import SushiUser
from .serializers import SushiUserSerializer


class SushiUserList(generics.ListAPIView):
    queryset = SushiUser.objects.all()
    serializer_class = SushiUserSerializer
