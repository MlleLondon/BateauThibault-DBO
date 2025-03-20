from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from monMag.models import ProduitEnPromotion

class UpdateStockTestCase(TestCase):
    def setUp(self):
        # Créer des produits pour le test
        self.product_1 = ProduitEnPromotion.objects.create(tigID=123, stock=10)
        self.product_2 = ProduitEnPromotion.objects.create(tigID=456, stock=20)
        self.client = APIClient()

    def test_update_stock(self):
        # Corps de la requête pour mettre à jour le stock
        data = [
            {"tigID": self.product_1.tigID, "quantity_change": 5},
            {"tigID": self.product_2.tigID, "quantity_change": -5}
        ]
        # Effectuer la requête POST pour mettre à jour le stock
        response = self.client.post('/update_stock/', data, format='json')

        # Vérifier la réponse
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.product_1.refresh_from_db()
        self.product_2.refresh_from_db()

        # Vérifier les valeurs mises à jour
        self.assertEqual(self.product_1.stock, 15)
        self.assertEqual(self.product_2.stock, 15)

    def test_update_stock_product_not_found(self):
        # Essayer de mettre à jour un produit qui n'existe pas
        data = [{"tigID": 999, "quantity_change": 5}]
        response = self.client.post('/update_stock/', data, format='json')

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, {"error": "Produit non trouvé"})
