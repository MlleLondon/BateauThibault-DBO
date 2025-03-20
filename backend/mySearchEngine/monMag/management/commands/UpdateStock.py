from django.core.management.base import BaseCommand
from monMag.models import ProduitEnPromotion
from monMag.serializers import ProduitEnPromotionSerializer
from monMag.config import baseUrl
import requests
import time

class Command(BaseCommand):
    help = 'Update the stock of available products.'

    def handle(self, *args, **options):
        self.stdout.write('[' + time.ctime() + '] Refreshing stock data for available products...')

        # Envoie la requête pour récupérer la liste des produits depuis l'API externe
        response = requests.get(baseUrl + 'products/')
        if response.status_code != 200:
            self.stdout.write(self.style.ERROR(f'Failed to fetch product data from API. Status code: {response.status_code}'))
            return

        jsondata = response.json()

        # Parcours tous les produits et met à jour le stock
        for product in jsondata:
            tigID = product.get('id')
            stock = product.get('stock', 0)  # Récupérer le stock (si le champ 'stock' existe)

            if tigID is None:
                continue

            try:
                # Trouver le produit en promotion avec le tigID correspondant
                produit = ProduitEnPromotion.objects.get(tigID=tigID)

                # Mettre à jour le stock
                produit.stock = stock
                produit.save()

                # Affichage du succès dans la console
                self.stdout.write(self.style.SUCCESS(f'[{time.ctime()}] Successfully updated stock for product id={tigID}, stock={stock}'))

            except ProduitEnPromotion.DoesNotExist:
                self.stdout.write(self.style.WARNING(f'[{time.ctime()}] Product with tigID={tigID} not found in the database.'))

        self.stdout.write('[' + time.ctime() + '] Stock update process completed.')
