from django.core.management.base import BaseCommand
from monTiGMagasin.models import InfoProduct

class Command(BaseCommand):
    help = 'Liste tous les produits dans la base de données'

    def handle(self, *args, **kwargs):
        products = InfoProduct.objects.all()
        self.stdout.write(f'Nombre total de produits : {products.count()}')
        for product in products:
            self.stdout.write(f'ID: {product.id}, Nom: {product.name}, Prix: {product.price}, Prix de vente: {product.prixVente}') 