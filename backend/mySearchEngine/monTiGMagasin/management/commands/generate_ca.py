from django.core.management.base import BaseCommand
from monTiGMagasin.models import ChiffreAffaire
from django.utils import timezone
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Génère les chiffres d\'affaires pour toutes les périodes'

    def handle(self, *args, **kwargs):
        # Date de début : 1er novembre 2023
        start_date = datetime(2023, 11, 1).date()
        # Date de fin : 20 mars 2025
        end_date = datetime(2025, 3, 20).date()
        
        current_date = start_date
        ca_count = 0
        
        while current_date <= end_date:
            # Générer CA journalier
            ChiffreAffaire.create_chiffre_affaire('JOURNALIER', current_date)
            ca_count += 1
            
            # Générer CA mensuel le 1er du mois
            if current_date.day == 1:
                ChiffreAffaire.create_chiffre_affaire('MENSUEL', current_date)
                ca_count += 1
            
            # Générer CA trimestriel le 1er jour du trimestre
            if current_date.day == 1 and current_date.month in [1, 4, 7, 10]:
                ChiffreAffaire.create_chiffre_affaire('TRIMESTRIEL', current_date)
                ca_count += 1
            
            # Générer CA annuel le 1er janvier
            if current_date.day == 1 and current_date.month == 1:
                ChiffreAffaire.create_chiffre_affaire('ANNUEL', current_date)
                ca_count += 1
            
            if ca_count % 10 == 0:
                self.stdout.write(self.style.SUCCESS(f'{ca_count} chiffres d\'affaires générés...'))
            
            current_date += timedelta(days=1)
        
        self.stdout.write(self.style.SUCCESS(f'Génération terminée ! {ca_count} chiffres d\'affaires créés.')) 