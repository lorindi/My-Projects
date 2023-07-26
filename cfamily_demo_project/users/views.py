from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth import get_user_model, login
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views import generic

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


class UserDetailsView(generic.DetailView):
    template_name = 'users/user-details-page.html'
    model = UserModel


class UserEditView(generic.UpdateView):
    model = UserModel
    template_name = 'users/user-edit-page.html'
    fields = ['username',
              'first_name',
              'last_name',
              'email'
              ]

    def get_success_url(self):
        return reverse_lazy('user details', kwargs={'pk': self.request.user.pk})


class UserDeleteView(generic.DeleteView):
    template_name = 'users/user-delete-page.html'
    model = UserModel
    next_page = reverse_lazy('homepage')

    def get_object(self, queryset=None):
        return self.request.user

    def post(self, *args, **kwargs):
        self.request.user.delete()
        return redirect('homepage')
