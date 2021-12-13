from django.urls import path, include
from django.contrib import admin
from . import views

# URLConfiguration
urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin', admin.site.urls),
    path('hello/', views.say_hello),
    path('/api', include('playground.api.urls'))
]

