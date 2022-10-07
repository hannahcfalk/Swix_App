from django.db import models


class Gender(models.TextChoices):
    FEMALE = 'female'
    MALE = 'male'
    NON_BINARY = 'non-binary'
    OTHER = 'other'
