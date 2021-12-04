from django.contrib import admin
# We define how the admin interface for this app is going to look like
# Register your models here.
from .models import Item

admin.site.register(Item)