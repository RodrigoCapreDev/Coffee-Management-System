from rest_framework import viewsets
from .models import Coffee
from .serializers import CoffeeSerializer

# Create your views here.
class CoffeeViewSet(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer
