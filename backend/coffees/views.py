from rest_framework import viewsets
from .models import Coffee
from .serializers import CoffeeSerializer, OriginSerializer

# Create your views here.
class CoffeeViewSet(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer

class OriginViewSet(viewsets.ModelViewSet):
    queryset = Coffee.origin.field.related_model.objects.all()
    serializer_class = OriginSerializer