from django.db import models


class Year(models.TextChoices):
    FIRST = '1st'
    SECOND = '2nd'
    THIRD = '3rd'
    FOURTH = '4th'
    FIFTH = '5th'
    MASTERS = 'masters'
    PHD = 'phd'
    OTHER = 'other'


class Degree(models.TextChoices):
    MANAGEMENT = 'management'
    COMPUTER_SCIENCE = 'computer-science'
    MATHS = 'maths'
    OTHER = 'other'
