from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('CFamily.common.urls')),
    path('user/', include('CFamily.users.urls')),
    path('donation/', include('CFamily.donations.urls')),
    # path('cart/', include('CFamily.cart.urls')),
    # path('payment/', include('CFamily.payments.urls')),
    # path('event/', include('CFamily.events.urls')),
    # path('campaign/', include('CFamily.campaigns.urls')),
    # path('benefactor/', include('CFamily.benefactors.urls')),
    # path('initiative/', include('CFamily.initiatives.urls')),
    # path('treks/', include('CFamily.charitable_treks.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
