from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('auth/', include('users.urls')),
        path('blog/', include('blog.urls')),
        path('kinds/', include('kinds.urls')),
        path('recipes/', include('recipes.urls')),
        path('courses/', include('courses.urls')),
        path('shop/', include('shop.urls')),
        path('cart/', include('cart.urls')),
        path('payment/', include('payment.urls')),
    ])),
]
