from django.contrib import admin
from django.urls import include, path

# I don't think this file actually does anything? Use mysite/mysite/urls.py instead
urlpatterns = [
	path('polls/', include('polls.urls')),
	path('admin/', admin.site.urls),
]
