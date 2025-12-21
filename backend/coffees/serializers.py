from rest_framework import serializers
from .models import Coffee

class CoffeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coffee
        fields = '__all__'
    
    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("El precio debe ser un valor positivo.")
        return value