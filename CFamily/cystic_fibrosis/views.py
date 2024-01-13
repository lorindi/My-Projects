from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DeleteView, DetailView, ListView
from cystic_fibrosis.models import CysticFibrosis
from mixins.mixins import GroupRequiredMixin


class CysticFibrosisDiagnosedListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_diagnosed.html'
    context_object_name = 'cf_diagnosed'
    queryset = CysticFibrosis.objects.filter(title='How is cystic fibrosis diagnosed?').order_by('-creation_time')


class CysticFibrosisTreatListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_treatment.html'
    context_object_name = 'cf_treatment'
    queryset = CysticFibrosis.objects.filter(title='How is cystic fibrosis treated?').order_by('-creation_time')


class CysticFibrosisAffectBodyListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_affect_body.html'
    context_object_name = 'cf_affect_body'
    queryset = CysticFibrosis.objects.filter(title='How does cystic fibrosis affect the body?').order_by(
        '-creation_time')


class CysticFibrosisCausesListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_causes.html'
    context_object_name = 'cf_causes'
    queryset = CysticFibrosis.objects.filter(title='What are the causes of cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisQuestionsListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_questions.html'
    context_object_name = 'cf_questions'
    queryset = CysticFibrosis.objects.filter(title='Frequently Asked Questions?').order_by(
        '-creation_time')


class CysticFibrosisBellesLettresListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_belles_lettres.html'
    context_object_name = 'cf_belles_lettres'
    queryset = CysticFibrosis.objects.filter(title='Cystic fibrosis in fiction?').order_by(
        '-creation_time')


class CysticFibrosisForTeachersListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_for_teachers.html'
    context_object_name = 'cf_for_teachers'
    queryset = CysticFibrosis.objects.filter(title='Cystic fibrosis for teachers?').order_by(
        '-creation_time')


class CysticFibrosisLifeListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_life.html'
    context_object_name = 'cf_life'
    queryset = CysticFibrosis.objects.filter(title='Life with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisHobbiesListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_hobbies.html'
    context_object_name = 'cf_hobbies'
    queryset = CysticFibrosis.objects.filter(title='Hobbies with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisEverydayLifeListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_everyday_life.html'
    context_object_name = 'cf_everyday_life'
    queryset = CysticFibrosis.objects.filter(title='Everyday life with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisPhysicalActivityListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_physical_activity.html'
    context_object_name = 'cf_physical_activity'
    queryset = CysticFibrosis.objects.filter(title='Physical activity with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisNutritionListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_nutrition.html'
    context_object_name = 'cf_nutrition'
    queryset = CysticFibrosis.objects.filter(title='Optimal nutrition in cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisCareerListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_career.html'
    context_object_name = 'cf_career'
    queryset = CysticFibrosis.objects.filter(title='Career with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisYoungPeopleListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_young_people.html'
    context_object_name = 'cf_young_people'
    queryset = CysticFibrosis.objects.filter(title='Young people with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisVarietyListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_variety.html'
    context_object_name = 'cf_variety'
    queryset = CysticFibrosis.objects.filter(title='Variety in treatment?').order_by(
        '-creation_time')


class CysticFibrosisParentsChildrenListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_parents_children.html'
    context_object_name = 'cf_parents_children'
    queryset = CysticFibrosis.objects.filter(title='Parents and children with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisPsyHealthListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_psy_health.html'
    context_object_name = 'cf_psy_health'
    queryset = CysticFibrosis.objects.filter(title='Psychological health with cystic fibrosis?').order_by(
        '-creation_time')


class CysticFibrosisListView(LoginRequiredMixin, ListView):
    model = CysticFibrosis
    context_object_name = 'cf'
    template_name = 'cystic_fibrosis/cf_list.html'

    # items = CysticFibrosis.objects
    # .filter(title='Psychological support').order_by('-creation_time')
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['items'] = CysticFibrosis.objects.all()
        # print(context['items'])
        return context


class CysticFibrosisCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins', 'Staff']
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_create.html'
    fields = ['title',
              'cover_image',
              'description',
              'image',
              'youtube_link',
              'first_title_of_description',
              'picture_of_the_first_description',
              'first_description',

              'second_title_of_description',
              'picture_of_the_second_description',
              'second_description',

              'third_title_of_description',
              'picture_of_the_third_description',
              'third_description',

              'fourth_title_of_description',
              'picture_of_the_fourth_description',
              'fourth_description',

              'fifth_title_of_description',
              'picture_of_the_fifth_description',
              'fifth_description',

              'sixth_title_of_description',
              'picture_of_the_sixth_description',
              'sixth_description',

              'seventh_title_of_description',
              'picture_of_the_seventh_description',
              'seventh_description',

              'eighth_title_of_description',
              'picture_of_the_eighth_description',
              'eighth_description',

              'ninth_title_of_description',
              'picture_of_the_ninth_description',
              'ninth_description',

              'tenth_title_of_description',
              'picture_of_the_tenth_description',
              'tenth_description',

              ]

    success_url = reverse_lazy('cf_list')

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class CysticFibrosisUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admin', 'Staff']
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_update.html'
    fields = ['title', 'cover_image', 'description', 'image', 'youtube_link']
    success_url = reverse_lazy('cf_list')


class CysticFibrosisDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admin', 'Staff']
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_delete.html'
    success_url = reverse_lazy('cf_list')


class CysticFibrosisDetailsView(LoginRequiredMixin, DetailView):
    model = CysticFibrosis
    template_name = 'cystic_fibrosis/cf_details.html'
    success_url = reverse_lazy('cf_list')
