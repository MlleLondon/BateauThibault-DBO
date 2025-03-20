from django.core.management.base import BaseCommand
from django.utils import timezone
from monTiGMagasin.models import InfoProduct, Transaction
from datetime import datetime, timedelta
import random
import calendar

PRODUCTS_DATA = [
    {"id": 12, "name": "Aile de raie", "price": 10.0},
    {"id": 9, "name": "Araignées", "price": 7.0},
    {"id": 3, "name": "Bar de ligne", "price": 30.0},
    {"id": 2, "name": "Bar de ligne portion", "price": 10.0},
    {"id": 10, "name": "Bouquets cuits", "price": 8.0},
    {"id": 1, "name": "Filet Bar de ligne", "price": 7.0},
    {"id": 5, "name": "Filet Julienne", "price": 19.0},
    {"id": 7, "name": "Huitres N°2 St Vaast", "price": 9.5},
    {"id": 8, "name": "Huitres N°2 St Vaast", "price": 38.0},
    {"id": 13, "name": "Huîtres N°2 OR St Vaast", "price": 12.0},
    {"id": 14, "name": "Huîtres N°2 OR St Vaast", "price": 24.0},
    {"id": 15, "name": "Huîtres N°2 OR St Vaast", "price": 48.0},
    {"id": 16, "name": "Huîtres N°2 St Vaast", "price": 19.0},
    {"id": 4, "name": "Lieu jaune de ligne", "price": 12.0},
    {"id": 6, "name": "Moules de pêche", "price": 7.0}
]

class Command(BaseCommand):
    help = 'Génère des transactions aléatoires entre novembre 2023 et mars 2025'

    def handle(self, *args, **kwargs):
        # Définir la période
        start_date = datetime(2023, 11, 1, tzinfo=timezone.get_current_timezone())
        end_date = datetime(2025, 3, 20, tzinfo=timezone.get_current_timezone())
        
        # Récupérer tous les produits
        products = []
        for product_data in PRODUCTS_DATA:
            try:
                product = InfoProduct.objects.get(id=product_data["id"])
                products.append(product)
            except InfoProduct.DoesNotExist:
                self.stdout.write(self.style.WARNING(f'Produit {product_data["name"]} non trouvé'))
        
        if not products:
            self.stdout.write(self.style.ERROR('Aucun produit trouvé dans la base de données'))
            return

        current_date = start_date
        transactions_count = 0
        
        # Définir les mois qui devraient être négatifs (par exemple, les mois d'hiver)
        negative_months = [11, 12, 1, 2]  # Novembre à Février
        
        while current_date <= end_date:
            # Déterminer si c'est un mois qui devrait être négatif
            is_negative_month = current_date.month in negative_months
            
            # Ajuster le nombre de transactions en fonction du mois
            if is_negative_month:
                num_transactions = random.randint(5, 12)  # Plus de transactions en hiver
            else:
                num_transactions = random.randint(3, 8)  # Moins de transactions en été
            
            # Liste pour suivre les transactions de la journée
            daily_transactions = []
            daily_total = 0
            
            for _ in range(num_transactions):
                # Sélectionner un produit au hasard
                product = random.choice(products)
                
                # Ajuster les probabilités en fonction du mois et du total journalier
                if is_negative_month:
                    # Pour les mois négatifs, plus de chances d'avoir des achats et des pertes
                    weights = [20, 40, 25, 15]  # SALE, PURCHASE, EXPIRED, STOLEN
                else:
                    # Pour les mois positifs, plus de chances d'avoir des ventes
                    weights = [60, 20, 10, 10]  # SALE, PURCHASE, EXPIRED, STOLEN
                
                transaction_type = random.choices(
                    [Transaction.SALE, Transaction.PURCHASE, Transaction.EXPIRED, Transaction.STOLEN],
                    weights=weights
                )[0]
                
                # Générer une quantité qui varie selon le mois
                if is_negative_month:
                    quantity = random.randint(1, 5)  # Moins de quantité en hiver
                else:
                    quantity = random.randint(3, 15)  # Plus de quantité en été
                
                # Définir le prix en fonction du type de transaction et du mois
                if transaction_type == Transaction.SALE:
                    if is_negative_month:
                        price = product.price * 1.2  # Marge plus faible en hiver
                    else:
                        price = product.price * 1.5  # Marge plus élevée en été
                else:
                    price = product.price
                
                # Ajouter une variation aléatoire au prix
                price_variation = random.uniform(0.85, 1.15)
                price *= price_variation
                
                # Créer la transaction
                transaction_time = current_date.replace(
                    hour=random.randint(8, 19),
                    minute=random.randint(0, 59)
                )
                
                # Déterminer si le produit est en solde (plus probable en hiver)
                was_on_sale = random.random() < (0.4 if is_negative_month else 0.2)
                if was_on_sale and transaction_type == Transaction.SALE:
                    price *= 0.8  # 20% de réduction
                
                transaction = Transaction.objects.create(
                    product=product,
                    quantity=quantity,
                    price_per_item=round(price, 2),
                    transaction_type=transaction_type,
                    transaction_date=transaction_time,
                    was_on_sale=was_on_sale
                )
                
                # Mettre à jour le total journalier
                if transaction_type == Transaction.SALE:
                    daily_total += transaction.total_amount
                else:
                    daily_total -= transaction.total_amount
                
                daily_transactions.append(transaction)
                transactions_count += 1
            
            current_date += timedelta(days=1)
            
            if transactions_count % 100 == 0:
                self.stdout.write(self.style.SUCCESS(f'{transactions_count} transactions générées...'))
        
        self.stdout.write(self.style.SUCCESS(f'Génération terminée ! {transactions_count} transactions créées.')) 