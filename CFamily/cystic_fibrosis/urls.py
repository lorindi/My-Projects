from django.urls import path

from cystic_fibrosis.views import CysticFibrosisCreateView, CysticFibrosisUpdateView, CysticFibrosisDeleteView, \
    CysticFibrosisDetailsView, CysticFibrosisDiagnosedListView, CysticFibrosisTreatListView, \
    CysticFibrosisCausesListView, CysticFibrosisQuestionsListView, CysticFibrosisBellesLettresListView, \
    CysticFibrosisForTeachersListView, CysticFibrosisLifeListView, CysticFibrosisHobbiesListView, \
    CysticFibrosisEverydayLifeListView, CysticFibrosisPhysicalActivityListView, CysticFibrosisNutritionListView, \
    CysticFibrosisCareerListView, CysticFibrosisYoungPeopleListView, CysticFibrosisParentsChildrenListView, \
    CysticFibrosisPsyHealthListView, CysticFibrosisAffectBodyListView, CysticFibrosisListView

# CysticFibrosisListView,



urlpatterns = [
    path('create/', CysticFibrosisCreateView.as_view(), name='cf_create'),
    path('edit/<int:pk>/', CysticFibrosisUpdateView.as_view(), name='cf_update'),
    path('delete/<int:pk>/', CysticFibrosisDeleteView.as_view(), name='cf_delete'),
    path('details/<int:pk>/', CysticFibrosisDetailsView.as_view(), name='cf_details'),
    path('list/', CysticFibrosisListView.as_view(), name='cf_list'),

    path('diagnosed/', CysticFibrosisDiagnosedListView.as_view(), name='cf_diagnosed'),
    path('treatment/', CysticFibrosisTreatListView.as_view(), name='cf_treatment'),
    path('affect-body/', CysticFibrosisAffectBodyListView.as_view(), name='cf_affect_body'),
    path('causes/', CysticFibrosisCausesListView.as_view(), name='cf_causes'),
    path('questions/', CysticFibrosisQuestionsListView.as_view(), name='cf_questions'),
    path('belles-lettres/', CysticFibrosisBellesLettresListView.as_view(), name='cf_belles_lettres'),
    path('for-teachers/', CysticFibrosisForTeachersListView.as_view(), name='cf_for_teachers'),
    path('life/', CysticFibrosisLifeListView.as_view(), name='cf_life'),
    path('hobbies/', CysticFibrosisHobbiesListView.as_view(), name='cf_hobbies'),
    path('everyday-life/', CysticFibrosisEverydayLifeListView.as_view(), name='cf_everyday_life'),
    path('physical-activity/', CysticFibrosisPhysicalActivityListView.as_view(), name='cf_physical_activity'),
    path('nutrition/', CysticFibrosisNutritionListView.as_view(), name='cf_nutrition'),
    path('career/', CysticFibrosisCareerListView.as_view(), name='cf_career'),
    path('young-people/', CysticFibrosisYoungPeopleListView.as_view(), name='cf_young_people'),
    path('variety/', CysticFibrosisYoungPeopleListView.as_view(), name='cf_variety'),
    path('parents-and-children/', CysticFibrosisParentsChildrenListView.as_view(), name='cf_parents_children'),
    path('psychological-health/', CysticFibrosisPsyHealthListView.as_view(), name='cf_psy_health'),

]
