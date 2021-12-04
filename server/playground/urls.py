from django.urls import path
from django.contrib import admin
from . import views

# URLConfiguration
urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin', admin.site.urls),
    path('hello/', views.say_hello)
]

