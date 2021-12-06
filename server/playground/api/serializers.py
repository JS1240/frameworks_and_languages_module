from rest_framework import serializers

from items.models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model =Item
        fields = ('id', 'keywords', 'description', 'image', 'lat', 'lon', 'date_from', 'date_to')