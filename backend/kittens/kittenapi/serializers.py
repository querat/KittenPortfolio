from rest_framework import serializers

from kittens.kittenapi.models import Kitten


class KittenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Kitten
        fields = ("name", "breed", "id")
