from django.core.management.base import BaseCommand
from monMag.models import ProduitEnPromotion
from monMag.serializers import ProduitEnPromotionSerializer
from monMag.config import baseUrl
import requests
import time

class Command(BaseCommand):
    help = 'Refresh the list of available products.'

    def handle(self, *args, **options):
        self.stdout.write('[' + time.ctime() + '] Refreshing available products data...')
        response = requests.get(baseUrl + 'products/')
        jsondata = response.json()

    
        ProduitEnPromotion.objects.filter(availability=True).delete()

        for product in jsondata:
            if product.get('availability', False): 
                # Sérialiser et ajouter le produit
                serializer = ProduitEnPromotionSerializer(data={
                    'tigID': str(product['id']),
                    'availability': True  
                })
                if serializer.is_valid():
                    serializer.save()  # Sauvegarder le produit
                    self.stdout.write(self.style.SUCCESS(f'[{time.ctime()}] Successfully added product id="{product["id"]}"'))
                else:
                    self.stdout.write(self.style.ERROR(f'[{time.ctime()}] Failed to add product id="{product["id"]}", errors: {serializer.errors}'))
        
        self.stdout.write('[' + time.ctime() + '] Available products refresh terminated.')
