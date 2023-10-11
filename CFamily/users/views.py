from django.contrib.auth import get_user_model, login
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth.forms import PasswordChangeForm, PasswordResetForm, SetPasswordForm
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView, PasswordChangeDoneView, \
    PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.core.paginator import Paginator, Page

from campaigns.models import CampaignRegistration
from events.models import EventRegistration
from initiatives.models import InitiativeRegistration
from users.forms import UserRegisterForm

UserModel = get_user_model()


class UserRegisterView(generic.CreateView):
    template_name = 'users/user-register-page.html'
    form_class = UserRegisterForm
    success_url = reverse_lazy('homepage')

    def form_valid(self, form):
        result = super().form_valid(form)
        login(self.request, self.object)
        return result


class UserLogin(LoginView):
    template_name = 'users/user-login-page.html'


class UserLogOut(LogoutView):
    next_page = reverse_lazy('homepage')


class UserDetailsView(LoginRequiredMixin, generic.DetailView):
    template_name = 'users/user-details-page.html'
    model = UserModel


class UserDetailsContentInfoView(LoginRequiredMixin, generic.DetailView):
    template_name = 'users/user-content-info.html'
    model = UserModel


class UserDetailsContentCampaignsView(LoginRequiredMixin, generic.DetailView):
    template_name = 'users/user-content-campaigns.html'
    model = UserModel

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        user_campaigns = self.get_user_campaigns()

        # Определете броя на елементите на страница
        items_per_page = 4  # Променете този брой според вашите нужди

        # Създайте Paginator обект
        paginator = Paginator(user_campaigns, items_per_page)

        # Вземете номера на текущата страница от query параметъра 'page'
        page_number = self.request.GET.get('page')

        # Вземете обект за текущата страница
        page = paginator.get_page(page_number)

        context['user_campaigns'] = page  # Подайте обекта на текущата страница на шаблона
        return context

    def get_user_campaigns(self):
        user = self.request.user
        # user_campaigns = CampaignRegistration.objects.filter(user=user).select_related('campaign')
        user_campaigns = CampaignRegistration.objects.filter(user=user).select_related('campaign').order_by(
            '-registration_date')

        return user_campaigns


class UserDetailsContentInitiativesView(LoginRequiredMixin, generic.DetailView):
    template_name = 'users/user-content-initiatives.html'
    model = UserModel

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        user_initiatives = self.get_user_initiatives()

        # Определете броя на елементите на страница
        items_per_page = 4  # Променете този брой според вашите нужди

        # Създайте Paginator обект
        paginator = Paginator(user_initiatives, items_per_page)

        # Вземете номера на текущата страница от query параметъра 'page'
        page_number = self.request.GET.get('page')

        # Вземете обект за текущата страница
        page = paginator.get_page(page_number)

        context['user_initiatives'] = page  # Подайте обекта на текущата страница на шаблона
        return context

    def get_user_initiatives(self):
        user = self.request.user
        user_initiatives = InitiativeRegistration.objects.filter(user=user).select_related('initiative').order_by(
            '-registration_date')

        return user_initiatives


class UserDetailsContentEventsView(LoginRequiredMixin, generic.DetailView):
    template_name = 'users/user-content-events.html'
    model = UserModel

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        user_events = self.get_user_events()

        # Определете броя на елементите на страница
        items_per_page = 4  # Променете този брой според вашите нужди

        # Създайте Paginator обект
        paginator = Paginator(user_events, items_per_page)

        # Вземете номера на текущата страница от query параметъра 'page'
        page_number = self.request.GET.get('page')

        # Вземете обект за текущата страница
        page = paginator.get_page(page_number)

        context['user_events'] = page  # Подайте обекта на текущата страница на шаблона
        return context

    def get_user_events(self):
        user = self.request.user
        user_events = EventRegistration.objects.filter(user=user).select_related('event').order_by(
            '-registration_date')

        return user_events


class UserEditView(LoginRequiredMixin, generic.UpdateView):
    model = UserModel
    template_name = 'users/user-edit-page.html'
    fields = ['username',
              'first_name',
              'last_name',
              'email',
              'type_user',
              'date_of_birth',
              'gender',
              'telephone',
              'side',
              'city',
              'link',
              'profile_picture'
              ]

    def get_object(self, queryset=None):
        return self.request.user

    def get_success_url(self):
        return reverse_lazy('user_details', kwargs={'pk': self.request.user.pk})

    def form_valid(self, form):
        if form.instance != self.request.user:
            return redirect('homepage')

        return super().form_valid(form)


class UserDeleteView(LoginRequiredMixin, generic.DeleteView):
    template_name = 'users/user-delete-page.html'
    model = UserModel
    next_page = reverse_lazy('homepage')

    def get_object(self, queryset=None):
        return self.request.user

    def post(self, *args, **kwargs):
        self.request.user.delete()
        return redirect('homepage')


class ChangeAccPasswordView(LoginRequiredMixin, PasswordChangeView):
    form_class = PasswordChangeForm
    success_url = reverse_lazy("password_change_done")
    template_name = "user_passwords/change_password.html"


class PassChanged(PasswordChangeDoneView):
    template_name = "user_passwords/change_pass_successful.html"


class PasswordReset(PasswordResetView):
    form_class = PasswordResetForm
    template_name = "user_passwords/password_reset.html"
    success_url = reverse_lazy("password_reset_done")


class PasswordResetDone(PasswordResetDoneView):
    template_name = "user_passwords/password_reset_done.html"


class PasswordResetConfirm(PasswordResetConfirmView):
    form_class = SetPasswordForm
    success_url = reverse_lazy("password_reset_complete")
    template_name = "user_passwords/password_reset_confirm.html"


class PasswordResetComplete(PasswordResetCompleteView):
    template_name = "user_passwords/password_reset_complete.html"
