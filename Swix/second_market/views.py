from rest_framework import viewsets

from .models import Event, Ticket
from .serializers import EventSerializer, TicketSerializer, TicketListSerializer
from rest_framework.permissions import IsAuthenticated


class TicketViewSet(viewsets.ModelViewSet):

    queryset = Ticket.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return TicketSerializer
        return TicketListSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class EventViewSet(viewsets.ModelViewSet):

    queryset = Event.objects.all()
    serializer_class = EventSerializer

