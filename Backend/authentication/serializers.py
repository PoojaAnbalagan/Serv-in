from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "password",
            "email",
            "first_name",
            "last_name",
            "phone"
        ]  
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data): 
        # print(validated_data) 
        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        # Fields that can be updated
        updatable_fields = [
            "email",
            "first_name",
            "last_name",
            "phone"
        ]
        for field in updatable_fields:
            if field in validated_data:
                setattr(instance, field, validated_data[field])
        # Handle password update
        password = validated_data.get("password")
        if password:
            instance.set_password(password)
        instance.save()
        return instance