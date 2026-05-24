from django.db import models

class Origin(models.Model):
    """pais/region del origen del cafe"""
    country = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    altitude_min=models.PositiveBigIntegerField(
        null=True, blank=True, help_text="Altitud mínima de cultivo en metros")
    altitude_max=models.PositiveBigIntegerField(
        null=True, blank=True, help_text="Altitud máxima de cultivo en metros")


class Coffee(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    roast_level = models.CharField(max_length=50)
    flavor_notes = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    origin = models.ForeignKey(Origin, 
        on_delete=models.SET_NULL, related_name='coffees', null=True)

    def __str__(self):
        return self.name