from django.urls import path

from recipes.views import RecipeCreateApiView

urlpatterns = [
    path('create/', RecipeCreateApiView.as_view(), name='recipe_create'),
]