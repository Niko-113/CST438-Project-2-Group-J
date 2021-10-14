from rest_framework import serializers
from .models import User, Item

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'username',
            'password',
            'isAdmin',
        )
        model = User
    def validate(self, data):        

        if User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError("Username " + data['username'] + " already exists!")
        return data


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'description',
            'url',
        )
        model = Item
