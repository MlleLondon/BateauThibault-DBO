from django.db import models
from django.utils import timezone 
from datetime import datetime, timedelta

# Create your models here.
class InfoProduct(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    tig_id = models.IntegerField(default='-1')
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200, choices=[
        ('0', 'Poisson'),
        ('1', 'Coquillage'),
        ('2', 'Crustacé')
    ])
    price = models.FloatField()
    unit = models.CharField(max_length=20)
    availability = models.IntegerField()
    sale = models.BooleanField(default=False)
    discount = models.FloatField(default=0)
    comments = models.TextField()
    owner = models.CharField(max_length=200)
    quantityInStock = models.PositiveIntegerField(default=0)

    @property
    def prixVente(self):
        if self.sale:
            return round(self.price * (1 - self.discount/100) * 1.4, 2)
        return round(self.price * 1.4, 2)

class Transaction(models.Model):
    SALE = 'sale'
    PURCHASE = 'purchase'
    EXPIRED = 'expired'
    STOLEN = 'stolen'

    TRANSACTION_TYPE_CHOICES = [
        (SALE, 'Sale'),
        (PURCHASE, 'Purchase'),
        (EXPIRED, 'Expired'),
        (STOLEN, 'Stolen'),
    ]

    product = models.ForeignKey(InfoProduct, related_name='transactions', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    price_per_item = models.FloatField(default=0.0)
    transaction_type = models.CharField(max_length=10, choices=TRANSACTION_TYPE_CHOICES, default=SALE)
    transaction_date = models.DateTimeField(default=timezone.now)
    total_amount = models.FloatField(default=0.0)
    was_on_sale = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # Capture l'état de promotion du produit au moment de la transaction
        self.was_on_sale = self.product.sale
        
        # Calcul du montant total arrondi à 2 décimales
        self.total_amount = round(self.quantity * self.price_per_item, 2)
        
        # Si c'est un vol, met à jour le stock
        if self.transaction_type == self.STOLEN:
            self.product.quantityInStock = max(0, self.product.quantityInStock - self.quantity)
            self.product.save()
            
        super().save(*args, **kwargs)


class FinancialIndex(models.Model):
    date = models.DateField(auto_now_add=True)
    total_sales = models.FloatField(default=0.0)
    total_purchases = models.FloatField(default=0.0)
    total_expenses = models.FloatField(default=0.0)
    net_profit = models.FloatField(default=0.0)
    vat = models.FloatField(default=0.0)

    def calculate_totals(self, start_date, end_date):
        sales = Transaction.objects.filter(transaction_date__range=[start_date, end_date], transaction_type=Transaction.SALE)
        purchases = Transaction.objects.filter(transaction_date__range=[start_date, end_date], transaction_type=Transaction.PURCHASE)
        expired = Transaction.objects.filter(transaction_date__range=[start_date, end_date], transaction_type=Transaction.EXPIRED)

        self.total_sales = sum(sale.total_amount for sale in sales)
        self.total_purchases = sum(purchase.total_amount for purchase in purchases)
        self.total_expenses = sum(expired.total_amount for expired in expired)

        self.vat = self.total_sales * 0.2
        self.net_profit = self.total_sales - self.total_purchases - self.total_expenses

        self.save()

class Meta:
        ordering = ('date',)  # Trier par la date

class ChiffreAffaire(models.Model):
    TYPE_CHOICES = [
        ('JOURNALIER', 'Journalier'),
        ('MENSUEL', 'Mensuel'),
        ('TRIMESTRIEL', 'Trimestriel'),
        ('ANNUEL', 'Annuel'),
    ]

    libelle = models.CharField(max_length=200)
    date = models.DateField()
    statut = models.BooleanField(default=True)  # True = actif, False = inactif
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    totalAvecSolde = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    totalSansSolde = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    totalGlobal = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    transactions = models.ManyToManyField('Transaction')

    class Meta:
        ordering = ['-date', '-type']

    @classmethod
    def update_chiffre_affaires(cls):
        today = timezone.now().date()
        
        # Désactiver les anciens chiffres d'affaires
        # Journalier : désactiver ceux d'hier
        cls.objects.filter(
            type='JOURNALIER',
            date=today - timedelta(days=1),
            statut=True
        ).update(statut=False)

        # Mensuel : désactiver ceux du mois précédent
        first_day_of_month = today.replace(day=1)
        last_month = first_day_of_month - timedelta(days=1)
        cls.objects.filter(
            type='MENSUEL',
            date__month=last_month.month,
            date__year=last_month.year,
            statut=True
        ).update(statut=False)

        # Trimestriel : désactiver ceux du trimestre précédent
        current_quarter = (today.month - 1) // 3 + 1
        if current_quarter == 1:
            last_quarter_date = today.replace(month=10, day=1)
        elif current_quarter == 2:
            last_quarter_date = today.replace(month=1, day=1)
        elif current_quarter == 3:
            last_quarter_date = today.replace(month=4, day=1)
        else:  # current_quarter == 4
            last_quarter_date = today.replace(month=7, day=1)
        
        cls.objects.filter(
            type='TRIMESTRIEL',
            date__month=last_quarter_date.month,
            date__year=last_quarter_date.year,
            statut=True
        ).update(statut=False)

        # Annuel : désactiver ceux de l'année précédente
        cls.objects.filter(
            type='ANNUEL',
            date__year=today.year - 1,
            statut=True
        ).update(statut=False)

        # Créer les nouveaux chiffres d'affaires si nécessaire
        # Journalier
        if not cls.objects.filter(type='JOURNALIER', date=today, statut=True).exists():
            cls.create_chiffre_affaire('JOURNALIER', today)

        # Mensuel
        if not cls.objects.filter(type='MENSUEL', date=first_day_of_month, statut=True).exists():
            cls.create_chiffre_affaire('MENSUEL', first_day_of_month)

        # Trimestriel
        quarter_start = today.replace(day=1)
        if current_quarter == 1:
            quarter_start = today.replace(month=1, day=1)
        elif current_quarter == 2:
            quarter_start = today.replace(month=4, day=1)
        elif current_quarter == 3:
            quarter_start = today.replace(month=7, day=1)
        else:  # current_quarter == 4
            quarter_start = today.replace(month=10, day=1)

        if not cls.objects.filter(type='TRIMESTRIEL', date=quarter_start, statut=True).exists():
            cls.create_chiffre_affaire('TRIMESTRIEL', quarter_start)

        # Annuel
        year_start = today.replace(month=1, day=1)
        if not cls.objects.filter(type='ANNUEL', date=year_start, statut=True).exists():
            cls.create_chiffre_affaire('ANNUEL', year_start)

    @classmethod
    def create_chiffre_affaire(cls, type_periode, date, is_active=True):
        # Déterminer la période de calcul
        if type_periode == 'JOURNALIER':
            start_date = datetime.combine(date, datetime.min.time())
            end_date = datetime.combine(date, datetime.max.time())
        elif type_periode == 'MENSUEL':
            start_date = date
            end_date = (date + timedelta(days=32)).replace(day=1) - timedelta(days=1)
        elif type_periode == 'TRIMESTRIEL':
            start_date = date
            if date.month == 1:
                end_date = date.replace(month=3, day=31)
            elif date.month == 4:
                end_date = date.replace(month=6, day=30)
            elif date.month == 7:
                end_date = date.replace(month=9, day=30)
            else:  # month == 10
                end_date = date.replace(month=12, day=31)
        else:  # ANNUEL
            start_date = date
            end_date = date.replace(month=12, day=31)

        # Pour les périodes autres que journalières, convertir les dates en datetime
        if type_periode != 'JOURNALIER':
            start_date = datetime.combine(start_date, datetime.min.time())
            end_date = datetime.combine(end_date, datetime.max.time())

        # Récupérer les transactions de la période
        transactions = Transaction.objects.filter(
            transaction_date__range=[start_date, end_date]
        )

        # Initialiser les totaux
        total_avec_solde = 0
        total_sans_solde = 0

        # Calculer les totaux en tenant compte du type de transaction
        for transaction in transactions:
            montant = transaction.total_amount
            
            if transaction.transaction_type == Transaction.SALE:
                # Les ventes augmentent le CA
                total_avec_solde += montant
                if not transaction.was_on_sale:
                    total_sans_solde += montant
            else:
                # Les achats, pertes et vols diminuent le CA
                total_avec_solde -= montant
                total_sans_solde -= montant

        # Calculer le total global
        total_global = total_avec_solde + total_sans_solde

        # Créer le chiffre d'affaires
        libelle = f"Chiffre d'affaires {type_periode.lower()} du {date.strftime('%d/%m/%Y')}"
        chiffre_affaire = cls.objects.create(
            libelle=libelle,
            date=date,
            type=type_periode,
            statut=is_active,  # Utiliser le paramètre is_active
            totalAvecSolde=total_avec_solde,
            totalSansSolde=total_sans_solde,
            totalGlobal=total_global
        )
        chiffre_affaire.transactions.set(transactions)
        
        return chiffre_affaire