from django.db import models
from django.utils import timezone 
# Create your models here.
class InfoProduct(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    tig_id = models.IntegerField(default='-1')
    name = models.CharField(max_length=100, blank=True, default='')
    category = models.IntegerField(default='-1')
    price = models.FloatField(default='0')
    unit = models.CharField(max_length=20, blank=True, default='')
    availability = models.BooleanField(default=True)
    sale = models.BooleanField(default=False)
    discount = models.FloatField(default='0')
    comments = models.CharField(max_length=100, blank=True, default='')
    owner = models.CharField(max_length=20, blank=True, default='tig_orig')
    quantityInStock = models.IntegerField(default='0')

class Transaction(models.Model):
    SALE = 'sale'
    PURCHASE = 'purchase'
    EXPIRED = 'expired'

    TRANSACTION_TYPE_CHOICES = [
        (SALE, 'Sale'),
        (PURCHASE, 'Purchase'),
        (EXPIRED, 'Expired'),
    ]

    product = models.ForeignKey(InfoProduct, related_name='transactions', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    price_per_item = models.FloatField(default=0.0)
    transaction_type = models.CharField(max_length=10, choices=TRANSACTION_TYPE_CHOICES, default=SALE)
    transaction_date = models.DateTimeField(default=timezone.now)
    total_amount = models.FloatField(default=0.0)

    def save(self, *args, **kwargs):
        self.total_amount = self.quantity * self.price_per_item
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