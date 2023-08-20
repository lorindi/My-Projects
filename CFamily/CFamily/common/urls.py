from django.urls import path

from CFamily.common.views import HomePage

urlpatterns = [

    path('', HomePage.as_view(), name='homepage'),


]