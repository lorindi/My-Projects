from django.urls import path, include

from common.views import HomePage

urlpatterns = [

    path('', HomePage.as_view(), name='homepage'),


]
