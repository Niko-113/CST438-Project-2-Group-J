from django.urls import path

from . import views

urlpatterns = [
	path('',veiws.index, name='index'),
]
