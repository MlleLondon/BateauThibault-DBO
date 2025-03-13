from django.urls import path
from monMag import views

urlpatterns = [
    path('products/', views.RedirectionListeDeProduits.as_view()),
    path('product/<int:pk>/', views.RedirectionDetailProduit.as_view()),
    path('onsaleproducts/', views.PromoList.as_view()),
    path('onsaleproduct/<int:pk>/', views.PromoDetail.as_view()),
    path('shipPoints/', views.ShipPointList.as_view(), name='shippoint-list'),
    path('shipPoint/<int:pk>/', views.ShipPointDetail.as_view(), name='shippoint-detail'),
    path('availableproducts/', views.AvailableProductList.as_view(), name='availableproduct-list'),
    path('availableproduct/<int:pk>/', views.AvailableProductDetail.as_view(), name='availableproduct-detail'),
    path('poissons/', views.PoissonList.as_view(), name='poisson-list'),
    path('crustaces/', views.CrustaceList.as_view(), name='crustace-list'),
    path('coquillages/', views.CoquillageList.as_view(), name='coquillage-list'),
    path('update_stock/', views.UpdateStock.as_view(), name='update-stock'),  # Mise à jour du stock
    path('update_promotion/', views.UpdatePromotion.as_view(), name='update-promotion'),  # Mise à jour de la promotion
    path('bulk_update/', views.BulkUpdate.as_view(), name='bulk-update'),  # Mise à jour simultanée de plusieurs produits
    path('alerts/', views.AlertList.as_view(), name='alert-list'),  # Alertes de marge négative
    path('dashboard/', views.Dashboard.as_view(), name='dashboard'),  # Dashboard avec les KPIs
     path('product/<int:pk>/stock/', views.ProductStockDetail.as_view(), name='product-stock-detail'),
]
