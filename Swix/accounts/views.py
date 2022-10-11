from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MyTokenObtainPairSerializer, StudentRegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics

from rest_framework.permissions import AllowAny
from .models import Student


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class StudentRegisterView(generics.CreateAPIView):
    queryset = Student.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = StudentRegisterSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        return self.create(request, *args, **kwargs)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/accounts/token/',
        'accounts/register/',
        'accounts/token/refresh/'
    ]
    return Response(routes)

