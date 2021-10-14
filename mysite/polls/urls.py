from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('create/', views.create, name ='create'),
	# path('removewishlist/', views.remove, name='wishlist_remove'),
	# path('addwishlist/', views.remove, name='wishlist_remove'),
]
