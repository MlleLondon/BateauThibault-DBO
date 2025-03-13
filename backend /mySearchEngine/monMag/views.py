import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404, JsonResponse
from monMag.config import baseUrl
from monMag.models import ProduitEnPromotion
from monMag.serializers import ProduitEnPromotionSerializer

# ✅ Liste des produits
class RedirectionListeDeProduits(APIView):
    def get(self, request, format=None):
        """Retourne la liste des produits depuis l'API externe."""
        try:
            response = requests.get(baseUrl + 'products/')
            response.raise_for_status()  # Vérifie si la requête a échoué
            return Response(response.json())
        except requests.exceptions.RequestException:
            raise Http404

# ✅ Détail d'un produit
class RedirectionDetailProduit(APIView):
    def get(self, request, pk, format=None):
        """Retourne le détail d'un produit spécifique."""
        try:
            response = requests.get(f"{baseUrl}product/{pk}/")
            response.raise_for_status()
            return Response(response.json())
        except requests.exceptions.RequestException:
            raise Http404

# ✅ Liste des promotions
class PromoList(APIView):
    def get(self, request, format=None):
        """Retourne la liste des produits en promotion avec leurs détails."""
        res = []
        for prod in ProduitEnPromotion.objects.all():
            serializer = ProduitEnPromotionSerializer(prod)
            try:
                response = requests.get(f"{baseUrl}product/{serializer.data['tigID']}/")
                response.raise_for_status()
                res.append(response.json())
            except requests.exceptions.RequestException:
                continue  # Ignore en cas d'erreur de requête
        return JsonResponse(res, safe=False)

# ✅ Détail d'une promotion
class PromoDetail(APIView):
    def get_object(self, pk):
        """Récupère un produit en promotion spécifique ou lève une erreur 404."""
        try:
            return ProduitEnPromotion.objects.get(pk=pk)
        except ProduitEnPromotion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        """Retourne le détail d'un produit en promotion."""
        prod = self.get_object(pk)
        serializer = ProduitEnPromotionSerializer(prod)
        try:
            response = requests.get(f"{baseUrl}product/{serializer.data['tigID']}/")
            response.raise_for_status()
            return Response(response.json())
        except requests.exceptions.RequestException:
            raise Http404

# ✅ Liste des points de relais
class ShipPointList(APIView):
    def get(self, request, format=None):
        """Retourne la liste de tous les points de relais."""
        try:
            response = requests.get(baseUrl + 'shipPoints/')
            response.raise_for_status()
            return Response(response.json())
        except requests.exceptions.RequestException:
            raise Http404

# ✅ Détail d’un point de relais
class ShipPointDetail(APIView):
    def get(self, request, pk, format=None):
        """Retourne le détail d’un point de relais spécifique."""
        try:
            response = requests.get(f"{baseUrl}shipPoint/{pk}/")
            response.raise_for_status()
            return Response(response.json())
        except requests.exceptions.RequestException:
            raise Http404

class AvailableProductList(APIView):
    def get(self, request, format=None):
        """Retourne la liste des produits disponibles (availability=True)."""
        res = []
        # Filtrer les produits en promotion disponibles
        for prod in ProduitEnPromotion.objects.filter(availability=True):
            serializer = ProduitEnPromotionSerializer(prod)  
            try:
                response = requests.get(f"{baseUrl}product/{serializer.data['tigID']}/")
                response.raise_for_status() 
                product_data = response.json()
                res.append(product_data) 
                print(f"Produit ajouté: {prod.tigID}")  
            except requests.exceptions.RequestException as e:
                
                print(f"Erreur pour le produit {prod.tigID}: {e}")
                continue 
        
        # Retourne la liste des produits en promotion disponibles sous forme de JSON
        return Response(res)

class AvailableProductDetail(APIView):

    def get_object(self, pk):
        """Récupère un produit disponible ou lève une erreur 404."""
        try:
            return ProduitEnPromotion.objects.get(tigID=pk)
        except ProduitEnPromotion.DoesNotExist:
            raise Http404  

    def get(self, request, pk, format=None):
        """Retourne le détail d'un produit disponible."""
        prod = self.get_object(pk)  
        serializer = ProduitEnPromotionSerializer(prod)
        try:
            response = requests.get(f"{baseUrl}product/{serializer.data['tigID']}/")
            response.raise_for_status()
            return Response(response.json())
        except requests.exceptions.RequestException:
            raise Http404
        
class PoissonList(APIView):
    def get(self, request, format=None):
        """Retourne la liste de tous les produits qui sont des poissons."""
        poissons = ProduitEnPromotion.objects.filter(category=0)  # Filtrer pour la catégorie "poisson"
        serializer = ProduitEnPromotionSerializer(poissons, many=True)
        return Response(serializer.data)
    
class CrustaceList(APIView):
    def get(self, request, format=None):
        """Retourne la liste de tous les produits qui sont des crustacés."""
        crustaces = ProduitEnPromotion.objects.filter(category=1)  # Filtrer pour la catégorie "crustacé"
        serializer = ProduitEnPromotionSerializer(crustaces, many=True)
        return Response(serializer.data)

class CoquillageList(APIView):
    def get(self, request, format=None):
        """Retourne la liste de tous les produits qui sont des coquillages."""
        coquillages = ProduitEnPromotion.objects.filter(category=2)  # Filtrer pour la catégorie "coquillage"
        serializer = ProduitEnPromotionSerializer(coquillages, many=True)
        return Response(serializer.data)
# UpStock

#Stock 
class ProductStockDetail(APIView):
    def get_object(self, pk):
        """Récupère un produit spécifique par son tigID ou lève une erreur 404."""
        try:
            return ProduitEnPromotion.objects.get(tigID=pk)  # Utilisez tigID comme clé primaire
        except ProduitEnPromotion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        """Retourne le détail d'un produit avec son stock."""
        prod = self.get_object(pk)  
        serializer = ProduitEnPromotionSerializer(prod)
        
        # Retourner les données du produit avec son stock
        product_data = serializer.data
        product_data['stock'] = prod.stock  # Ajouter le stock à la réponse

        return Response(product_data)

class UpdateStock(APIView):
    def post(self, request, format=None):
        """Met à jour le stock pour plusieurs produits."""
        try:
            # Récupère les données envoyées dans la requête
            products = request.data.get('products', [])
            
            # Vérification des produits envoyés
            if not products:
                return Response({"status": "error", "message": "Aucun produit à mettre à jour."}, status=400)
            
            # Traitement de chaque produit
            for product in products:
                try:
                    # Récupère le produit par son ID
                    prod = ProduitEnPromotion.objects.get(pk=product['tigID'])
                    
                    # Mise à jour du stock
                    original_stock = prod.stock
                    prod.stock += product['stock_change']
                    prod.save()

                    # Vérification que le stock a bien été mis à jour
                    prod.refresh_from_db()  # Rafraîchir les données de l'instance
                    print(f"Produit ID {prod.tigID}: Stock avant {original_stock}, stock après {prod.stock}")
                
                except ProduitEnPromotion.DoesNotExist:
                    return Response({"status": "error", "message": f"Produit avec l'ID {product['tigID']} non trouvé."}, status=404)

            return Response({"status": "success", "message": "Stock mis à jour avec succès!"})

        except Exception as e:
            return Response({"status": "error", "message": str(e)}, status=400)

#Pourcentage

class UpdatePromotion(APIView):
    def post(self, request, format=None):
        """Met à jour le pourcentage de promotion pour plusieurs produits."""
        try:
            # Récupère les données envoyées dans la requête
            products = request.data.get('products', [])
            
            for product in products:
                prod = ProduitEnPromotion.objects.get(pk=product['id'])
                prod.promotion_percentage = product['promotion_percentage']  # Modifie le pourcentage de promotion
                prod.save()

            return Response({"status": "success", "message": "Promotion mise à jour avec succès!"})
        except Exception as e:
            return Response({"status": "error", "message": str(e)}, status=400)
#Changement des produit 

class BulkUpdate(APIView):
    def post(self, request, format=None):
        """Met à jour simultanément plusieurs produits."""
        try:
            products = request.data.get('products', [])
            
            for product in products:
                prod = ProduitEnPromotion.objects.get(pk=product['id'])
                # Met à jour les informations (stock et promotion)
                if 'stock_change' in product:
                    prod.stock += product['stock_change']
                if 'promotion_percentage' in product:
                    prod.promotion_percentage = product['promotion_percentage']
                prod.save()

            return Response({"status": "success", "message": "Mise à jour de plusieurs produits réussie!"})
        except Exception as e:
            return Response({"status": "error", "message": str(e)}, status=400)
        
#Alerte 
class AlertList(APIView):
    def get(self, request, format=None):
        """Retourne la liste des alertes pour les trimestres avec une marge négative."""
        alerts = []
        # Logique pour vérifier les trimestres avec marge négative
        for trimestre in range(1, 5):  # 4 trimestres par an
            margin = self.calculate_margin_for_quarter(trimestre)
            if margin < 0:
                alerts.append({
                    'trimestre': trimestre,
                    'message': f"Alerte: Marge négative pour le trimestre {trimestre}."
                })

        return Response(alerts)

    def calculate_margin_for_quarter(self, trimestre):
        """Calcule la marge pour un trimestre donné."""
        # Cette méthode devra calculer la marge en fonction des données spécifiques de ton modèle
        # Pour l'exemple, on renvoie une valeur arbitraire
        return -5000  # Valeur négative par défaut pour l'exemple

#Dashbord 

class Dashboard(APIView):
    def get(self, request, format=None):
        """Retourne les KPIs du dashboard."""
        data = {
            "chiffre_affaires": self.get_revenue(),
            "marge": self.get_margin(),
            "impot": self.get_tax(),
            "alerts": self.get_alerts()
        }

        return Response(data)

    def get_revenue(self):
        """Calcule le chiffre d'affaires."""
        # Remplace avec ta logique de calcul
        return 100000  # Exemple de valeur

    def get_margin(self):
        """Calcule la marge."""
        # Remplace avec ta logique de calcul
        return 20000  # Exemple de valeur

    def get_tax(self):
        """Calcule l'impôt sur les sociétés."""
        # Remplace avec ta logique de calcul
        return 6000  # Exemple de valeur

    def get_alerts(self):
        """Retourne les alertes de marge négative."""
        return ["Alerte: Marge négative sur le trimestre 1"]
#Stock 
class ProductStockDetail(APIView):
    def get_object(self, pk):
        """Récupère un produit spécifique par son tigID ou lève une erreur 404."""
        try:
            return ProduitEnPromotion.objects.get(tigID=pk)  # Utilisez tigID comme clé primaire
        except ProduitEnPromotion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        """Retourne le détail d'un produit avec son stock."""
        prod = self.get_object(pk)  # Récupère le produit en fonction du tigID
        # Sérialisation du produit
        serializer = ProduitEnPromotionSerializer(prod)
        
        # Retourner les données du produit avec son stock
        product_data = serializer.data
        product_data['stock'] = prod.stock  # Ajouter le stock à la réponse

        return Response(product_data)
