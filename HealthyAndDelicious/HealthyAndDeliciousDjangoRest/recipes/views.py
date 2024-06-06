# from rest_framework import generics, status
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from .models import RecipeUser
# from .serializers import RecipeSerializer
#
#
# def get_user(model, **kwargs):
#     try:
#         return model.objects.get(**kwargs)
#     except model.DoesNotExist:
#         return None
#
#
# class RecipeCreateApiView(generics.CreateAPIView):
#     queryset = RecipeUser.objects.all()
#     serializer_class = RecipeSerializer
#     permission_classes = [IsAuthenticated]  # Apply IsAuthenticated permission
#
#     def post(self, request, *args, **kwargs):
#         user = request.user  # Get the authenticated user
#         serializer = RecipeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(creator=user)  # Set the creator as the authenticated user
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def get(self, request, *args, **kwargs):
#         recipes = self.get_queryset()
#         serializer = RecipeSerializer(recipes, many=True)
#         return Response(serializer.data)