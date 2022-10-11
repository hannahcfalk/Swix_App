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



class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__'



class StudentRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validators.validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    student = StudentSerializer()

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'password2', 'student')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match"})
        return attrs

    def create(self, validated_data):
        student_data = validated_data.pop('student')
        user = CustomUser.objects.create(
            username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        Student.objects.create(user=user, **student_data)
        return user

