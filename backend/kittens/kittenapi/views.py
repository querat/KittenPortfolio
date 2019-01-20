from django.shortcuts import render
from rest_framework import viewsets

from kittens.kittenapi.models import Kitten
from kittens.kittenapi.serializers import KittenSerializer


class KittenViewSet(viewsets.ModelViewSet):
    queryset = Kitten.objects.all()
    serializer_class = KittenSerializer
