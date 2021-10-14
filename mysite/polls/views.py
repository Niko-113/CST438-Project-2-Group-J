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

# #add item to wishlist
# #add/removed commented untill I know the DB var names to update these functions, but I'll update these once that's in -Amy
# def addwishlist(request, id):
#     customer=request.user.customer
#     Wishlist.objects.filter(user_id=customer.id, product=Product.objects.get(id=id)).add()
#     messages.success(request, 'Product Added to Wishlist...')
#     return HttpResponseRedirect('/wishlist')


# # #remove item from wishlist
# def deletewishlist(request, id):
#     customer=request.user.customer
#     Wishlist.objects.filter(user_id=customer.id, product=Product.objects.get(id=id)).delete()
#     messages.success(request, 'Product Remove From Wishlist...')
#     return HttpResponseRedirect('/wishlist')

