from django.contrib.auth import get_user_model, login
from django.contrib.auth.forms import PasswordChangeForm, PasswordResetForm, SetPasswordForm
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView, PasswordChangeDoneView, \
    PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView

from django.urls import reverse_lazy
from django.views import generic

from cfamily.profiles.forms import CreateProfileForm

UserModel = get_user_model()


class ProfileLogin(LoginView):
    template_name = 'profiles/profile_login.html'


class ProfileRegisterView(generic.CreateView):
    template_name = 'profiles/profile_create.html'
    form_class = CreateProfileForm
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        result = super().form_valid(form)
        login(self.request, self.object)
        return result


class ProfileLogOut(LogoutView):
    next_page = reverse_lazy('index')


class ProfileDetailsView(generic.DetailView):
    template_name = 'profiles/profile_details.html'
    model = UserModel


class ProfileEditView(generic.UpdateView):
    model = UserModel
    template_name = 'profiles/profile_edit.html'
    fields = ['username',
              'first_name',
              'last_name',
              'email'
              ]

    def get_success_url(self):
        return reverse_lazy('account details', kwargs={'pk': self.request.user.pk})


class ProfileDeleteView(generic.DeleteView):
    template_name = 'profiles/profile_delete.html'
    model = UserModel
    success_url = reverse_lazy('index')


class ChangeAccPasswordView(PasswordChangeView):
    form_class = PasswordChangeForm
    success_url = reverse_lazy("password_change_done")
    template_name = "passwords/change_password.html"


class PassChanged(PasswordChangeDoneView):
    template_name = "passwords/change_pass_successful.html"


class PasswordReset(PasswordResetView):
    form_class = PasswordResetForm
    template_name = "passwords/password_reset.html"
    success_url = reverse_lazy("password_reset_done")


class PasswordResetDone(PasswordResetDoneView):
    template_name = "passwords/password_reset_done.html"


class PasswordResetConfirm(PasswordResetConfirmView):
    form_class = SetPasswordForm
    success_url = reverse_lazy("password_reset_complete")
    template_name = "passwords/password_reset_confirm.html"


class PasswordResetComplete(PasswordResetCompleteView):
    template_name = "passwords/password_reset_complete.html"
