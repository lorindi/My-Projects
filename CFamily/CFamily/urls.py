from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
# from app_react.views import ReactView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', ReactView.as_view(), name='anything'),
    path('', include('common.urls')),
    path('user/', include('users.urls')),
    path('donation/', include('donations.urls')),
    path('cart/', include('cart.urls')),
    # path('payment/', include('CFamily.payments.urls')),
    # path('event/', include('CFamily.events.urls')),
    # path('campaign/', include('CFamily.campaigns.urls')),
    # path('benefactor/', include('CFamily.benefactors.urls')),
    # path('initiative/', include('CFamily.initiatives.urls')),
    # path('treks/', include('CFamily.charitable_treks.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
