from django.contrib.auth.forms import UserCreationForm
from .models import User
from django import forms

class CreationForm(forms.Form):
    model = User
    #fields = ('username', 'password')
    username = forms.CharField(label='Username', max_length=20)
    # TODO: Make into password input
    password = forms.CharField(widget=forms.PasswordInput, label='Password', max_length=20)