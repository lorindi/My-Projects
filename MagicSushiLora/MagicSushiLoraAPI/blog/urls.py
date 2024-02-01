from django.urls import path

from blog.views import ListBlogAPIView

urlpatterns = [
    path('blog/', ListBlogAPIView.as_view(), name='-api-blog-list'),
]