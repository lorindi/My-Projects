from django.urls import path

from campaigns.views import CampaignListView, CampaignDetailView, CampaignCreateView, CampaignUpdateView, \
    CampaignDeleteView, CampaignSupportView, CampaignRegisterView, AdminCampaignListView, CampaignUnregisterView

urlpatterns = [
    path('', CampaignListView.as_view(), name='campaign_list'),
    path('<int:pk>/', CampaignDetailView.as_view(), name='campaign_detail'),
    path('create/', CampaignCreateView.as_view(), name='campaign_create'),
    path('<int:pk>/update/', CampaignUpdateView.as_view(), name='campaign_update'),
    path('<int:pk>/delete/', CampaignDeleteView.as_view(), name='campaign_delete'),
    path('campaign/<int:pk>/support/success/', CampaignSupportView.as_view(), name='campaign_success'),
    path('<int:pk>/register/', CampaignRegisterView.as_view(), name='campaign_register'),
    path('admin/campaigns/', AdminCampaignListView.as_view(), name='admin_campaign_list'),
    path('campaign/unregister/<int:pk>/', CampaignUnregisterView.as_view(), name='campaign_unregister'),

]
