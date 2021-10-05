from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.



def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def create(request):
    return render(request, 'create.html')