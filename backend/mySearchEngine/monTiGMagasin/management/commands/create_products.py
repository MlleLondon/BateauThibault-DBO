from django.core.management.base import BaseCommand
from monTiGMagasin.models import InfoProduct

PRODUCTS_DATA = [
    {
        "id": 12,
        "name": "Aile de raie",
        "category": "0",
        "price": 10.0,
        "unit": "kg",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Pêche à la corde",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 9,
        "name": "Araignées",
        "category": "2",
        "price": 7.0,
        "unit": "kg",
        "availability": False,
        "sale": False,
        "discount": 0.0,
        "comments": "Hors saison,  pêche aux casiers",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 3,
        "name": "Bar de ligne",
        "category": "0",
        "price": 30.0,
        "unit": "kg",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Plus de 1.5kg le poisson",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 2,
        "name": "Bar de ligne portion",
        "category": "0",
        "price": 10.0,
        "unit": "pièce",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Environ 550-700g la pièce",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 10,
        "name": "Bouquets cuits",
        "category": "1",
        "price": 8.0,
        "unit": "100g",
        "availability": False,
        "sale": False,
        "discount": 0.0,
        "comments": "Hors saison, pêche à l'épuisette",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 1,
        "name": "Filet Bar de ligne",
        "category": "0",
        "price": 7.0,
        "unit": "2 filets",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "environ 300g",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 5,
        "name": "Filet Julienne",
        "category": "0",
        "price": 19.0,
        "unit": "kg",
        "availability": False,
        "sale": False,
        "discount": 0.0,
        "comments": "Pêche à la corde",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 7,
        "name": "Huitres N°2 St Vaast",
        "category": "1",
        "price": 9.5,
        "unit": "Dz",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 8,
        "name": "Huitres N°2 St Vaast",
        "category": "1",
        "price": 38.0,
        "unit": "4 Dz",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 13,
        "name": "Huîtres N°2 OR St Vaast",
        "category": "1",
        "price": 12.0,
        "unit": "Dz",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Médaille d'or Salon Agriculture",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 14,
        "name": "Huîtres N°2 OR St Vaast",
        "category": "1",
        "price": 24.0,
        "unit": "2 Dz",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Médaille d'or salon agriculture",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 15,
        "name": "Huîtres N°2 OR St Vaast",
        "category": "1",
        "price": 48.0,
        "unit": "4 Dz",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Médaille d'or salon agriculture",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 16,
        "name": "Huîtres N°2 St Vaast",
        "category": "1",
        "price": 19.0,
        "unit": "2 Dz",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 4,
        "name": "Lieu jaune de ligne",
        "category": "0",
        "price": 12.0,
        "unit": "kg",
        "availability": True,
        "sale": False,
        "discount": 0.0,
        "comments": "Environ 550-700g la portion",
        "owner": "tig",
        "quantityInStock": 100
    },
    {
        "id": 6,
        "name": "Moules de pêche",
        "category": "1",
        "price": 7.0,
        "unit": "kg",
        "availability": True,
        "sale": True,
        "discount": 5.0,
        "comments": "",
        "owner": "tig",
        "quantityInStock": 100
    }
]

class Command(BaseCommand):
    help = 'Crée les produits dans la base de données'

    def handle(self, *args, **kwargs):
        for product_data in PRODUCTS_DATA:
            try:
                InfoProduct.objects.update_or_create(
                    id=product_data["id"],
                    defaults={
                        "name": product_data["name"],
                        "category": product_data["category"],
                        "price": product_data["price"],
                        "unit": product_data["unit"],
                        "availability": product_data["availability"],
                        "sale": product_data["sale"],
                        "discount": product_data["discount"],
                        "comments": product_data["comments"],
                        "owner": product_data["owner"],
                        "quantityInStock": product_data["quantityInStock"]
                    }
                )
                self.stdout.write(self.style.SUCCESS(f'Produit {product_data["name"]} créé/mis à jour avec succès'))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'Erreur lors de la création du produit {product_data["name"]}: {str(e)}')) 