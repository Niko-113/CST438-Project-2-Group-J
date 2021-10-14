from django.urls import path

from . import views

urlpatterns = [
	path('', views.ListUsers.as_view()),
	path('<int:pk>/', views.DetailUsers.as_view()),
	path('create/', views.create, name ='create'),
	path('createItem/', views.createItem, name = 'createItem'),
]
