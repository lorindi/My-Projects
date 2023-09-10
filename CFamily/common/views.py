from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views import generic, View


class HomePage(generic.TemplateView):
    template_name = 'common/home-page.html'
