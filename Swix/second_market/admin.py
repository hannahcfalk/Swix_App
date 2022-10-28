from django.contrib import admin
from .models import Ticket

# Register your models here.

class TicketAdmin(admin.ModelAdmin):
    model = Ticket
    list_display = ['event', 'price', 'owner']

admin.site.register(Ticket, TicketAdmin)
