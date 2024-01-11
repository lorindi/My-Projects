from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('common.urls')),
    path('user/', include('users.urls')),
    path('donation/', include('donations.urls')),
    path('cart/', include('cart.urls')),
    path('payment/', include('payments.urls')),
    path('event/', include('events.urls')),
    path('campaign/', include('campaigns.urls')),
    path('benefactor/', include('benefactors.urls')),
    path('initiative/', include('initiatives.urls')),
    path('treks/', include('charitable_treks.urls')),
    path('cf/', include('cystic_fibrosis.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
