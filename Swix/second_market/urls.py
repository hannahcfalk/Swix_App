from django.urls import include, path
from rest_framework import routers
from .views import EventViewSet, TicketViewSet


router = routers.DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'tickets', TicketViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
