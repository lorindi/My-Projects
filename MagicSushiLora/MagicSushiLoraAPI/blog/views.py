from rest_framework import generics
from blog.models import Blog
from blog.serializers import BlogSerializer


class ListBlogAPIView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
