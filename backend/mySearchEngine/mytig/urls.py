from django.urls import path
from mytig import views
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', views.RedirectionListeDeProduits.as_view(), name='projectRoot'),
    path('products/', views.RedirectionListeDeProduits.as_view(), name='mytigProducts'),
    path('product/<int:pk>/', views.RedirectionDetailProduit.as_view()),
    path('product/<int:pk>/image/', views.ProduitImageRandom.as_view()),
    path('product/<int:pk>/image/<int:image_id>/', views.ProduitImage.as_view()),
    path('onsaleproducts/', views.PromoList.as_view()),
    path('onsaleproduct/<int:pk>/', views.PromoDetail.as_view()),
]
