from rest_framework import generics, status, permissions
from rest_framework.response import Response

from recipes.models import Recipe
from recipes.serializers import RecipeSerializer


class RecipeCreateApiView(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def post(self, request, *args, **kwargs):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(creator=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        recipes = self.get_queryset()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)
