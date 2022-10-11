from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
import django.contrib.auth.password_validation as validators

from .models import CustomUser, Student


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        return token


class StudentRegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True, required=True, validators=[validators.validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    

    class Meta:
        model = Student
        fields = ('username', 'email', 'dob', 'gender', 'course', 'year', 'password', 'password2',)


    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match"})
        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data["username"],
            email=validated_data["email"]
        )
        user.set_password(validated_data["password"])
        user.save()
        Student.objects.create(
            user_id=user.id,
            dob=validated_data['dob'],
            gender=validated_data["gender"],
            course=validated_data["course"],
            year=validated_data["year"]
        )
        return validated_data

