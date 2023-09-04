from django.urls import path
from benefactors.views import BenefactorListView, BenefactorDetailView, BenefactorCreateView, BenefactorUpdateView, BenefactorDeleteView

urlpatterns = [
    path('', BenefactorListView.as_view(), name='benefactor_list'),
    path('<int:pk>/', BenefactorDetailView.as_view(), name='benefactor_detail'),
    path('create/', BenefactorCreateView.as_view(), name='benefactor_create'),
    path('<int:pk>/update/', BenefactorUpdateView.as_view(), name='benefactor_update'),
    path('<int:pk>/delete/', BenefactorDeleteView.as_view(), name='benefactor_delete'),
]
