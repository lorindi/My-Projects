from urllib import request

from django.contrib.auth import get_user_model, login
from django.shortcuts import redirect
from django.urls import reverse_lazy, reverse
from django.views import generic

from django.contrib.auth.forms import PasswordChangeForm, PasswordResetForm, SetPasswordForm
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView, PasswordChangeDoneView, \
    PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView

from CFamily.users.forms import UserRegisterForm

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


class UserDetailsView(generic.DetailView):
    template_name = 'users/user-details-page.html'
    model = UserModel


class UserEditView(generic.UpdateView):
    model = UserModel
    template_name = 'users/user-edit-page.html'
    fields = ['username',
              'first_name',
              'last_name',
              'email',
              'profile_picture',
              'date_of_birth',
              'gender',
              'telephone',
              'side',
              'city',
              'link',
              ]

    def get_object(self, queryset=None):
        return self.request.user

    def get_success_url(self):
        return reverse_lazy('user_details', kwargs={'pk': self.request.user.pk})

    def form_valid(self, form):
        if form.instance != self.request.user:
            return redirect('homepage')

        return super().form_valid(form)


class UserDeleteView(generic.DeleteView):
    template_name = 'users/user-delete-page.html'
    model = UserModel
    next_page = reverse_lazy('homepage')

    def get_object(self, queryset=None):
        return self.request.user

    def post(self, *args, **kwargs):
        self.request.user.delete()
        return redirect('homepage')


class ChangeAccPasswordView(PasswordChangeView):
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
