from django.db import models


class Origin(models.Model):
    """pais/region del origen del cafe"""

    country = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    altitude_min = models.PositiveBigIntegerField(
        null=True, blank=True, help_text="Altitud mínima de cultivo en metros"
    )
    altitude_max = models.PositiveBigIntegerField(
        null=True, blank=True, help_text="Altitud máxima de cultivo en metros"
    )


class Coffee(models.Model):
    class RoastLevel(models.TextChoices):
        LIGHT = "light", "Light"
        MEDIUM_LIGHT = "medium_light", "Medium Light"
        MEDIUM = "medium", "Medium"
        MEDIUM_DARK = "medium_dark", "Medium Dark"
        DARK = "dark", "Dark"

    class ProcessMethod(models.TextChoices):
        WASHED = "washed", "Washed"
        NATURAL = "natural", "Natural"
        HONEY = "honey", "Honey"
        ANAEROBIC = "anaerobic", "Anaerobic"
        WET_HULLED = "wet_hulled", "Wet Hulled"

    name = models.CharField(max_length=100)
    description = models.TextField()
    flavor_notes = models.TextField()

    origin = models.ForeignKey(
        Origin, on_delete=models.SET_NULL, related_name="coffees", null=True
    )

    #--- comercial ---
    price = models.DecimalField(max_digits=10, decimal_places=2)
    weight_grams= models.PositiveIntegerField(
        default=250, help_text="Peso del paquete en gramos"
    )
    stock = models.PositiveIntegerField(default=0)
    is_available = models.BooleanField(default=True)
    

    def __str__(self):
        return self.name
