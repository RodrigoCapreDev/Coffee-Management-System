from django.db import models

class Coffee(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    origin = models.CharField(max_length=100)
    roast_level = models.CharField(max_length=50)
    flavor_notes = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name