from rest_framework import serializers
from .models import Item


class ItemSerializer(serializers.ModelSerializer):
    date_from = serializers.DataField(format=None, input_formats=None)
    date_to = serializers.DateField(format=None, input_formats=None)

    class Meta:
        model = Item
        fields = '__all__'
