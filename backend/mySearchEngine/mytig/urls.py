from django.urls import path
from mytig import views
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', views.RedirectionListeDeProduits.as_view(), name='urlRedirectionListeDeProduits'),
    path('products/', views.RedirectionListeDeProduits.as_view(), name='mytigProducts'),
    path('product/<int:pk>/', views.RedirectionDetailProduit.as_view(), name='urlRedirectionDetailProduit'),
    path('product/<int:pk>/image/', views.ProduitImageRandom.as_view(), name='urlProduitImageRandom'),
    path('product/<int:pk>/image/<int:image_id>/', views.ProduitImage.as_view(), name='urlProduitImage'),
    path('produitsenpromotion/', views.PromoList.as_view(), name='produits-en-promotion'),
    path('produitenpromo/<int:pk>/', views.PromoDetail.as_view(), name='produit-en-promo'),
    path('categorie/<str:categorie>/', views.ProduitsParCategorie.as_view(), name='urlProduitsParCategorie'),
]
