from django.contrib.auth.models import AbstractUser
from django.db import models


from .enums import course, personal


class CustomUser(AbstractUser):
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class Student(models.Model):

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='student')
    dob = models.DateField()
    gender = models.CharField(choices=personal.Gender.choices, max_length=10)
    year = models.CharField(choices=course.Year.choices, default=course.Year.OTHER, max_length=10)
    course = models.CharField(choices=course.Degree.choices, default=course.Degree.OTHER, max_length=50)

    def __str__(self):
        return self.user.username

