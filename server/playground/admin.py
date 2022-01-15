from django.contrib import admin
# We define how the admin interface for this app is going to look like
# Register your models here.
from playground.models import Item


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'user_id', 'description', 'keywords', 'image']
