from django.core.management.base import BaseCommand
from monTiGMagasin.models import InfoProduct

class Command(BaseCommand):
    help = 'Importe les données initiales des produits'

    def handle(self, *args, **kwargs):
        initial_products = [
            {
                "name": "Aile de raie",
                "category": 0,
                "price": 10.0,
                "unit": "kg",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Pêche à la corde",
                "owner": "tig"
            },
            {
                "name": "Araignées",
                "category": 2,
                "price": 7.0,
                "unit": "kg",
                "availability": False,
                "sale": False,
                "discount": 0.0,
                "comments": "Hors saison, pêche aux casiers",
                "owner": "tig"
            },
            {
                "name": "Bar de ligne",
                "category": 0,
                "price": 30.0,
                "unit": "kg",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Plus de 1.5kg le poisson",
                "owner": "tig"
            },
            {
                "name": "Bar de ligne portion",
                "category": 0,
                "price": 10.0,
                "unit": "pièce",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Environ 550-700g la pièce",
                "owner": "tig"
            },
            {
                "name": "Bouquets cuits",
                "category": 1,
                "price": 8.0,
                "unit": "100g",
                "availability": False,
                "sale": False,
                "discount": 0.0,
                "comments": "Hors saison, pêche à l'épuisette",
                "owner": "tig"
            },
            {
                "name": "Filet Bar de ligne",
                "category": 0,
                "price": 7.0,
                "unit": "2 filets",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "environ 300g",
                "owner": "tig"
            },
            {
                "name": "Filet Julienne",
                "category": 0,
                "price": 19.0,
                "unit": "kg",
                "availability": False,
                "sale": False,
                "discount": 0.0,
                "comments": "Pêche à la corde",
                "owner": "tig"
            },
            {
                "name": "Huitres N°2 St Vaast",
                "category": 1,
                "price": 9.5,
                "unit": "Dz",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "",
                "owner": "tig"
            },
            {
                "name": "Huitres N°2 St Vaast",
                "category": 1,
                "price": 38.0,
                "unit": "4 Dz",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "",
                "owner": "tig"
            },
            {
                "name": "Huîtres N°2 OR St Vaast",
                "category": 1,
                "price": 12.0,
                "unit": "Dz",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Médaille d'or Salon Agriculture",
                "owner": "tig"
            },
            {
                "name": "Huîtres N°2 OR St Vaast",
                "category": 1,
                "price": 24.0,
                "unit": "2 Dz",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Médaille d'or salon agriculture",
                "owner": "tig"
            },
            {
                "name": "Huîtres N°2 OR St Vaast",
                "category": 1,
                "price": 48.0,
                "unit": "4 Dz",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Médaille d'or salon agriculture",
                "owner": "tig"
            },
            {
                "name": "Huîtres N°2 St Vaast",
                "category": 1,
                "price": 19.0,
                "unit": "2 Dz",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "",
                "owner": "tig"
            },
            {
                "name": "Lieu jaune de ligne",
                "category": 0,
                "price": 12.0,
                "unit": "kg",
                "availability": True,
                "sale": False,
                "discount": 0.0,
                "comments": "Environ 550-700g la portion",
                "owner": "tig"
            },
            {
                "name": "Moules de pêche",
                "category": 1,
                "price": 7.0,
                "unit": "kg",
                "availability": True,
                "sale": True,
                "discount": 5.0,
                "comments": "",
                "owner": "tig"
            }
        ]

        for product_data in initial_products:
            InfoProduct.objects.create(**product_data)

        self.stdout.write(self.style.SUCCESS('Données initiales importées avec succès')) 