from django.urls import path

from . import views

urlpatterns = [
	path('', views.ListUsers.as_view()),
	path('<int:pk>/', views.DetailUsers.as_view()),
	path('login/', views.login, name = 'login'),
	path('create/', views.create, name ='create'),
	path('createItem/', views.createItem, name = 'createItem'),
	path('getItems/', views.getItems, name = 'getItems'),
]
