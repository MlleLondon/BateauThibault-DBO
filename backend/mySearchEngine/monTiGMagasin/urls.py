from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.InfoProductList.as_view()),
    path('products/<int:pk>/', views.InfoProductDetail.as_view()),
    path('transactions/', views.TransactionList.as_view()),
    path('transaction/<int:pk>/', views.TransactionDetail.as_view(), name='transaction-detail'),
    path('transactions/filter/<str:type>/<int:year>/', views.TransactionsByTypeAndYear.as_view(), name='transactions-by-type-and-year'),
    path('financial/', views.FinancialIndexList.as_view()),
    path('financial/<int:pk>/', views.FinancialIndexDetail.as_view()),
    path('check-availability/<int:product_id>/<int:quantity>/',
         views.CheckProductAvailability.as_view(),
         name='check-product-availability'),
    path('transaction/create/<int:product_id>/<int:quantity>/<str:type>/', 
         views.SimpleTransactionCreate.as_view(), 
         name='simple-transaction-create'),
    
    # Nouveaux endpoints pour le chiffre d'affaires
    path('chiffre-affaire/actifs/', 
         views.ChiffreAffaireActif.as_view(), 
         name='chiffre-affaire-actifs'),
    path('chiffre-affaire/annee/<int:year>/', 
         views.ChiffreAffaireParAnnee.as_view(), 
         name='chiffre-affaire-par-annee'),
    path('chiffre-affaire/annuel/negatif/', 
         views.ChiffreAffaireAnnuelNegatif.as_view(), 
         name='chiffre-affaire-annuel-negatif'),
    path('chiffre-affaire/annuel/positif/', 
         views.ChiffreAffaireAnnuelPositif.as_view(), 
         name='chiffre-affaire-annuel-positif'),
    path('chiffre-affaire/annee/<int:year>/type/<str:type>/',
         views.ChiffreAffaireParAnneeEtType.as_view(),
         name='chiffre-affaire-par-annee-et-type'),
]
