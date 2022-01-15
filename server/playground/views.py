from django.shortcuts import render
from rest_framework import generics
from rest_framework import filters
from playground.serializer import ItemSerializer
from .models import Item

# Creating the views


class List_Search_Items(generics.ListAPIView):
    search_fields = ['keywords']
    filter_backends = (filters.SearchFilter,)
    queryset = Item.objects.all().orderby('id').reverse()
    serializer_class = ItemSerializer


class GetItem(generics.RetrieveUpdateAPIView):
    queryset = Item.objects.all()
    lookup_url_kwarg = 'id'
    serializer_class = ItemSerializer


class CreateItem(generics.CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
