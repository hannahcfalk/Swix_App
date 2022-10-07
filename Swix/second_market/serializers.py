from rest_framework import serializers

from .models import Event, Ticket


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = ['event', 'transfer_link', 'price']


class TicketListSerializer(serializers.ModelSerializer):
    event = EventSerializer(required=True)
    owner = serializers.SlugField()

    class Meta:
        model = Ticket
        fields = ['id', 'event', 'price', 'owner']
