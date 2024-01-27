from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import viewsets
from sushi.models import Sushi
from sushi.serializers import SushiSerializer


class ListSushiAPIView(generics.ListAPIView):
    queryset = Sushi.objects.all()
    serializer_class = SushiSerializer


