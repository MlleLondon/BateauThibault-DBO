from django.urls import path
from . import views

urlpatterns = [
    path('infoproducts/', views.InfoProductList.as_view()),
    path('infoproduct/<int:pk>/', views.InfoProductDetail.as_view()),
    path('transactions/', views.TransactionList.as_view()),
    path('financial-index/', views.FinancialIndexList.as_view()),
    path('financial-index/<int:pk>/', views.FinancialIndexDetail.as_view()),
]
