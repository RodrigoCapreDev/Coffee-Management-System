from decimal import Decimal

from django.core.management.base import BaseCommand
from coffees.models import Coffee, Origin


class Command(BaseCommand):
    help = "Carga cafés de ejemplo"

    def handle(self, *args, **options):
        origins = {
            "ethiopia": Origin.objects.get_or_create(
                country="Etiopía",
                region="Yirgacheffe",
                defaults={
                    "altitude_min": 1800,
                    "altitude_max": 2200,
                },
            )[0],
            "colombia": Origin.objects.get_or_create(
                country="Colombia",
                region="Huila",
                defaults={
                    "altitude_min": 1500,
                    "altitude_max": 1900,
                },
            )[0],
            "guatemala": Origin.objects.get_or_create(
                country="Guatemala",
                region="Antigua",
                defaults={
                    "altitude_min": 1400,
                    "altitude_max": 1700,
                },
            )[0],
            "brazil": Origin.objects.get_or_create(
                country="Brasil",
                region="Minas Gerais",
                defaults={
                    "altitude_min": 900,
                    "altitude_max": 1300,
                },
            )[0],
            "kenya": Origin.objects.get_or_create(
                country="Kenia",
                region="Nyeri",
                defaults={
                    "altitude_min": 1600,
                    "altitude_max": 2100,
                },
            )[0],
        }

        coffee_data = [
            {
                "name": "Ethiopia Natural",
                "description": "Café etíope de proceso natural, muy aromático y floral.",
                "flavor_notes": "Jazmín, durazno, cítricos, miel",
                "origin": origins["ethiopia"],
                "price": Decimal("12.50"),
                "weight_grams": 250,
                "stock": 20,
                "is_available": True,
                "recommended_brew": "V60",
                "grind_size": "Medium",
                "brew_temp_celsius": 92,
            },
            {
                "name": "Colombia Washed",
                "description": "Perfil limpio y balanceado, ideal para métodos filtrados.",
                "flavor_notes": "Chocolate, caramelo, manzana roja",
                "origin": origins["colombia"],
                "price": Decimal("11.00"),
                "weight_grams": 250,
                "stock": 18,
                "is_available": True,
                "recommended_brew": "Chemex",
                "grind_size": "Medium-Coarse",
                "brew_temp_celsius": 93,
            },
            {
                "name": "Guatemala Antigua",
                "description": "Café dulce y especiado con cuerpo medio.",
                "flavor_notes": "Cacao, nuez, canela, naranja",
                "origin": origins["guatemala"],
                "price": Decimal("10.80"),
                "weight_grams": 250,
                "stock": 15,
                "is_available": True,
                "recommended_brew": "French Press",
                "grind_size": "Coarse",
                "brew_temp_celsius": 94,
            },
            {
                "name": "Brazil Espresso Blend",
                "description": "Base ideal para espresso, con buena crema y dulzor.",
                "flavor_notes": "Avellana, chocolate, azúcar morena",
                "origin": origins["brazil"],
                "price": Decimal("9.90"),
                "weight_grams": 500,
                "stock": 12,
                "is_available": True,
                "recommended_brew": "Espresso",
                "grind_size": "Fine",
                "brew_temp_celsius": 93,
            },
            {
                "name": "Kenya AA Washed",
                "description": "Taza brillante con acidez viva y mucha complejidad.",
                "flavor_notes": "Frutos rojos, grosella, pomelo",
                "origin": origins["kenya"],
                "price": Decimal("13.40"),
                "weight_grams": 250,
                "stock": 8,
                "is_available": True,
                "recommended_brew": "AeroPress",
                "grind_size": "Medium-Fine",
                "brew_temp_celsius": 91,
            },
            {
                "name": "Colombia Decaf",
                "description": "Descafeinado suave, pensado para consumo nocturno.",
                "flavor_notes": "Caramelo, cacao, almendra",
                "origin": origins["colombia"],
                "price": Decimal("11.90"),
                "weight_grams": 250,
                "stock": 10,
                "is_available": False,
                "recommended_brew": "Moka",
                "grind_size": "Fine",
                "brew_temp_celsius": 92,
            },
        ]

        created = 0
        updated = 0

        for data in coffee_data:
            coffee, was_created = Coffee.objects.update_or_create(
                name=data["name"],
                defaults=data,
            )
            if was_created:
                created += 1
            else:
                updated += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Seed completado: {created} creados, {updated} actualizados."
            )
        )