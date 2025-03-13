from rest_framework.serializers import ModelSerializer
from monMag.models import ProduitEnPromotion

class ProduitEnPromotionSerializer(ModelSerializer):
    class Meta:
        model = ProduitEnPromotion
        fields = ('id', 'tigID','availability','category','stock')
