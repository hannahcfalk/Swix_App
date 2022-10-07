from django.db import models
from accounts.models import CustomUser


class Event(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()

    def __str__(self):
        return self.name


class Ticket(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    transfer_link = models.URLField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    owner = models.ForeignKey(CustomUser, unique=False, on_delete=models.CASCADE)
