from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import Http404
from monTiGMagasin.models import InfoProduct, Transaction, FinancialIndex, ChiffreAffaire
from monTiGMagasin.serializers import InfoProductSerializer, TransactionSerializer, FinancialIndexSerializer, ChiffreAffaireSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
from django.shortcuts import get_object_or_404

class InfoProductList(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = InfoProduct.objects.all()
    serializer_class = InfoProductSerializer

class InfoProductDetail(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    queryset = InfoProduct.objects.all()
    serializer_class = InfoProductSerializer
    lookup_field = 'tig_id'

class TransactionList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class TransactionDetail(generics.RetrieveAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]

class FinancialIndexList(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = FinancialIndex.objects.all().order_by('-date')
    serializer_class = FinancialIndexSerializer

class FinancialIndexDetail(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = FinancialIndex.objects.all()
    serializer_class = FinancialIndexSerializer

class SimpleTransactionCreate(APIView):
    def post(self, request, product_id, quantity, type):
        # Vérifier que le type est valide
        if type not in [Transaction.SALE, Transaction.PURCHASE, Transaction.EXPIRED, Transaction.STOLEN]:
            return Response({
                'error': 'Type invalide. Utilisez: sale, purchase, expired ou stolen'
            }, status=status.HTTP_400_BAD_REQUEST)

        # Récupérer le produit
        product = get_object_or_404(InfoProduct, id=product_id)

        # Vérifier le stock pour les ventes et les vols
        if type in [Transaction.SALE, Transaction.STOLEN]:
            if product.quantityInStock < int(quantity):
                return Response({
                    'error': f'Stock insuffisant. Disponible: {product.quantityInStock}'
                }, status=status.HTTP_400_BAD_REQUEST)

        # Créer la transaction
        transaction = Transaction(
            product=product,
            quantity=quantity,
            price_per_item=product.price,
            transaction_type=type,
            transaction_date=timezone.now()
        )

        # Mettre à jour le stock
        if type == Transaction.SALE or type == Transaction.STOLEN:
            product.quantityInStock -= int(quantity)
        elif type == Transaction.PURCHASE:
            product.quantityInStock += int(quantity)

        # Sauvegarder les changements
        product.save()
        transaction.save()

        return Response({
            'message': 'Transaction créée avec succès',
            'transaction': {
                'id': transaction.id,
                'product': product.name,
                'quantity': transaction.quantity,
                'price_per_item': transaction.price_per_item,
                'total_amount': transaction.total_amount,
                'type': transaction.transaction_type,
                'date': transaction.transaction_date,
                'was_on_sale': transaction.was_on_sale
            }
        }, status=status.HTTP_201_CREATED)

class CheckProductAvailability(APIView):
    def get(self, request, product_id, quantity):
        try:
            product = InfoProduct.objects.get(id=product_id)
            
            is_available = product.quantityInStock >= int(quantity)
            
            return Response({
                'product': product.name,
                'requested_quantity': quantity,
                'available_quantity': product.quantityInStock,
                'is_available': is_available,
                'current_price': product.price,
                'is_on_sale': product.sale,
                'sale_discount': product.discount if product.sale else 0
            })
            
        except InfoProduct.DoesNotExist:
            return Response({
                'error': f'Produit avec ID {product_id} non trouvé'
            }, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({
                'error': 'La quantité doit être un nombre entier positif'
            }, status=status.HTTP_400_BAD_REQUEST)

class TransactionsByTypeAndYear(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, type, year):
        if type not in [Transaction.SALE, Transaction.PURCHASE, Transaction.EXPIRED, Transaction.STOLEN]:
            return Response({
                'error': 'Type invalide. Utilisez: sale, purchase, expired ou stolen'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            year = int(year)
            transactions = Transaction.objects.filter(
                transaction_type=type,
                transaction_date__year=year
            )
            serializer = TransactionSerializer(transactions, many=True)
            return Response(serializer.data)
        except ValueError:
            return Response({
                'error': 'Année invalide'
            }, status=status.HTTP_400_BAD_REQUEST)

class ChiffreAffaireActif(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Récupérer les 4 chiffres d'affaires actifs (un par type)
        chiffres_actifs = ChiffreAffaire.objects.filter(
            statut=True
        ).order_by('type')
        
        serializer = ChiffreAffaireSerializer(chiffres_actifs, many=True)
        return Response(serializer.data)

class ChiffreAffaireParAnnee(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, year):
        try:
            year = int(year)
            chiffres = ChiffreAffaire.objects.filter(
                date__year=year
            ).order_by('type', '-date')
            
            serializer = ChiffreAffaireSerializer(chiffres, many=True)
            return Response(serializer.data)
        except ValueError:
            return Response({
                'error': 'Année invalide'
            }, status=status.HTTP_400_BAD_REQUEST)

class ChiffreAffaireAnnuelNegatif(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        chiffres_negatifs = ChiffreAffaire.objects.filter(
            type='ANNUEL',
            totalSansSolde__lt=0
        ).order_by('-date')
        
        serializer = ChiffreAffaireSerializer(chiffres_negatifs, many=True)
        return Response(serializer.data)

class ChiffreAffaireAnnuelPositif(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        chiffres_positifs = ChiffreAffaire.objects.filter(
            type='ANNUEL',
            totalSansSolde__gt=0
        ).order_by('-date')
        
        serializer = ChiffreAffaireSerializer(chiffres_positifs, many=True)
        return Response(serializer.data)

class ChiffreAffaireParAnneeEtType(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, year, type):
        try:
            year = int(year)
            if type not in ['JOURNALIER', 'MENSUEL', 'TRIMESTRIEL', 'ANNUEL']:
                return Response({
                    'error': 'Type invalide. Utilisez: JOURNALIER, MENSUEL, TRIMESTRIEL ou ANNUEL'
                }, status=status.HTTP_400_BAD_REQUEST)
                
            chiffres = ChiffreAffaire.objects.filter(
                date__year=year,
                type=type
            ).order_by('-date')
            
            serializer = ChiffreAffaireSerializer(chiffres, many=True)
            return Response(serializer.data)
        except ValueError:
            return Response({
                'error': 'Année invalide'
            }, status=status.HTTP_400_BAD_REQUEST)
