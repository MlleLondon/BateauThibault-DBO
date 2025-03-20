from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import Http404
from monTiGMagasin.models import InfoProduct, Transaction, FinancialIndex
from monTiGMagasin.serializers import InfoProductSerializer, TransactionSerializer, FinancialIndexSerializer

class InfoProductList(generics.ListAPIView):
    permission_classes = (AllowAny,)  # Utiliser IsAuthenticated si vous souhaitez sécuriser l'accès
    queryset = InfoProduct.objects.all()
    serializer_class = InfoProductSerializer

class InfoProductDetail(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)  # Utiliser IsAuthenticated si vous souhaitez sécuriser l'accès
    queryset = InfoProduct.objects.all()
    serializer_class = InfoProductSerializer
    lookup_field = 'tig_id'  # Permet de récupérer un produit par son tig_id au lieu de l'ID standard

class TransactionList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)  # Vous pouvez changer en fonction de vos besoins
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class FinancialIndexList(generics.ListAPIView):
    permission_classes = (AllowAny,)  # Vous pouvez changer en fonction de vos besoins
    queryset = FinancialIndex.objects.all().order_by('-date')
    serializer_class = FinancialIndexSerializer

class FinancialIndexDetail(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)  # Vous pouvez changer en fonction de vos besoins
    queryset = FinancialIndex.objects.all()
    serializer_class = FinancialIndexSerializer
