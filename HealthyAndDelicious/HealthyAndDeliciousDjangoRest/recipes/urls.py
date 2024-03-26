urlpatterns = [
    path('recipes/', RecipeListCreateAPIView.as_view(), name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeRetrieveUpdateDestroyAPIView.as_view(), name='recipe-detail'),
]