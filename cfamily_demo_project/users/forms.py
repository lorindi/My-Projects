from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm, UsernameField
from django import forms

UserModel = get_user_model()


class UserRegisterForm(UserCreationForm):
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'password'}), label='Password:')
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'password'}), label='Retype password:')

    class Meta(UserCreationForm.Meta):
        model = UserModel
        fields = ['username', 'email', 'password1', 'password2']
        widgets = {
            'username': forms.TextInput(
                attrs={'placeholder': 'username'}),
            'email': forms.EmailInput(
                attrs={'placeholder': 'email'}),

        }

