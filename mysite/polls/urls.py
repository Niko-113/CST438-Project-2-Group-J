from django.conf.urls import include
from django.urls import path

from . import views

urlpatterns = [
	path('', views.ListUsers.as_view()),
	path('<int:pk>/', views.DetailUsers.as_view()),
	path('create/', views.create, name ='create'),

	# path('removewishlist/', views.remove, name='wishlist_remove'),
	# path('addwishlist/', views.remove, name='wishlist_remove'),

	path('createItem/', views.createItem, name = 'createItem'),


	#Add Django site authentication urls (for login, logout, password management)
    path('accounts/', include('django.contrib.auth.urls')),


	path('getItems/', views.getItems, name = 'getItems'),

]
