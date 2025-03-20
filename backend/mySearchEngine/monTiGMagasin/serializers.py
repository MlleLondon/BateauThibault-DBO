from rest_framework.serializers import ModelSerializer
from monTiGMagasin.models import InfoProduct
from .models import InfoProduct, Transaction, FinancialIndex, ChiffreAffaire
from rest_framework import serializers

class InfoProductSerializer(ModelSerializer):
    prixVente = serializers.SerializerMethodField()

    class Meta:
        model = InfoProduct
        fields = ('id', 'tig_id', 'name', 'category', 'price', 'prixVente', 'unit', 'availability', 'sale', 'discount', 'comments', 'owner', 'quantityInStock')

    def get_prixVente(self, obj):
        return obj.prixVente

class TransactionSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    product_category = serializers.CharField(source='product.category', read_only=True)
    
    class Meta:
        model = Transaction
        fields = ['id', 'product', 'product_name', 'product_category', 
                 'quantity', 'price_per_item', 'transaction_type', 
                 'transaction_date', 'total_amount', 'was_on_sale']
        read_only_fields = ['total_amount', 'was_on_sale']

    def validate(self, data):
        # Vérifier que la quantité est positive
        if data.get('quantity', 0) <= 0:
            raise serializers.ValidationError("La quantité doit être positive")
        
        # Vérifier que le prix est positif
        if data.get('price_per_item', 0) <= 0:
            raise serializers.ValidationError("Le prix doit être positif")
        
        # Vérifier la disponibilité du produit pour une vente ou un vol
        if data.get('transaction_type') in [Transaction.SALE, Transaction.STOLEN]:
            product = data.get('product')
            if product.quantityInStock < data.get('quantity', 0):
                raise serializers.ValidationError(
                    f"Stock insuffisant. Disponible : {product.quantityInStock}")
        
        return data

class FinancialIndexSerializer(ModelSerializer):
    class Meta:
        model = FinancialIndex
        fields = ('date', 'total_sales', 'total_purchases', 'total_expenses', 'net_profit', 'vat')

class ChiffreAffaireSerializer(ModelSerializer):
    class Meta:
        model = ChiffreAffaire
        fields = ('id', 'libelle', 'date', 'statut', 'type', 'totalAvecSolde', 'totalSansSolde', 'totalGlobal')
        read_only_fields = ('id', 'libelle', 'totalAvecSolde', 'totalSansSolde', 'totalGlobal')
