from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.template import loader
from .models import User
from .forms import CreationForm
# Create your views here.



def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def create(request):
    if request.method=="POST":
        form = CreationForm(request.POST)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            newUser = User()
            newUser.username = username
            newUser.password = password
            newUser.save() 
            return redirect("/polls/create")
    else:
        form = CreationForm()
    return render(request, 'create.html', {'form': form})