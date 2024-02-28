from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from recipes.models import Recipe
from recipes.serializers import RecipeSerializer
from users.models import SushiUser


def get_user(model, **kwargs):
    try:
        return model.objects.get(**kwargs)
    except model.DoesNotExist:
        return None


class RecipeCreateApiView(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = [IsAuthenticated]



    def post(self, request, *args, **kwargs):
        # user = get_user(SushiUser, id=request.data.get('userId'))
        serializer = RecipeSerializer(data=request.data)
        # print(request.data.get('userId'))
        if serializer.is_valid() :

            # print(request.user)
            # serializer.creator = user
            # print(serializer)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        print(request.user)
        recipes = self.get_queryset()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)
