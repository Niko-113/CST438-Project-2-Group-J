from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.template import loader
from .models import User
# Create your views here.



def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def create(request):
    if request.method=="POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        newUser = User()
        newUser.username = username
        newUser.password = password
        newUser.save()

        return redirect("/polls/create")
    return render(request, 'create.html')