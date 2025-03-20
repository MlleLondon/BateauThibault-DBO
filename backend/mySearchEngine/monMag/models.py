from django.db import models

class ProduitEnPromotion(models.Model):
    created = models.DateTimeField(auto_now_add=True) 
    tigID = models.IntegerField(default=-1) 
    availability = models.BooleanField(default=True)  
    category = models.IntegerField(default=0)
    stock = models.IntegerField(default=0)

    class Meta:
        ordering = ('tigID',) 

    def __str__(self):
     return f"Produit {self.tigID} - Stock: {self.stock}"

