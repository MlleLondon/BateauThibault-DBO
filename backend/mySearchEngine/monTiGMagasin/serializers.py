from rest_framework.serializers import ModelSerializer
from monTiGMagasin.models import InfoProduct
from .models import InfoProduct, Transaction, FinancialIndex

class InfoProductSerializer(ModelSerializer):
    class Meta:
        model = InfoProduct
        fields = ('id', 'tig_id', 'name', 'category', 'price', 'unit', 'availability', 'sale', 'discount', 'comments', 'owner', 'quantityInStock')

class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('id', 'product', 'quantity', 'price_per_item', 'transaction_type', 'transaction_date', 'total_amount')

class FinancialIndexSerializer(ModelSerializer):
    class Meta:
        model = FinancialIndex
        fields = ('date', 'total_sales', 'total_purchases', 'total_expenses', 'net_profit', 'vat')
