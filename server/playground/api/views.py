from rest_framework.generics import ListAPIView, RetrieveAPIView

from playground.models import Item
from.serializers import ItemSerializer


class ItemListView(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetailView(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer