from rest_framework import serializers
from .models import User

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
