from django.core.management.base import BaseCommand
from monTiGMagasin.models import ChiffreAffaire

class Command(BaseCommand):
    help = 'Met à jour les chiffres d\'affaires (désactive les anciens et crée les nouveaux)'

    def handle(self, *args, **options):
        self.stdout.write('Début de la mise à jour des chiffres d\'affaires...')
        ChiffreAffaire.update_chiffre_affaires()
        self.stdout.write(self.style.SUCCESS('Mise à jour des chiffres d\'affaires terminée avec succès')) 