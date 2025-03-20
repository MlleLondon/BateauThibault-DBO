from django.core.management.base import BaseCommand
from monTiGMagasin.models import Transaction, ChiffreAffaire

class Command(BaseCommand):
    help = 'Vide les tables Transaction et ChiffreAffaire'

    def handle(self, *args, **kwargs):
        # Supprimer toutes les transactions
        transactions_count = Transaction.objects.count()
        Transaction.objects.all().delete()
        self.stdout.write(self.style.SUCCESS(f'{transactions_count} transactions supprimées'))

        # Supprimer tous les chiffres d'affaires
        ca_count = ChiffreAffaire.objects.count()
        ChiffreAffaire.objects.all().delete()
        self.stdout.write(self.style.SUCCESS(f'{ca_count} chiffres d\'affaires supprimés')) 