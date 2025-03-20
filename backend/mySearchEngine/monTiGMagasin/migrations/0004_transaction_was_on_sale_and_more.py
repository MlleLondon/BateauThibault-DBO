# Generated by Django 5.1.7 on 2025-03-20 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monTiGMagasin', '0003_alter_infoproduct_availability_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='was_on_sale',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='transaction_type',
            field=models.CharField(choices=[('sale', 'Sale'), ('purchase', 'Purchase'), ('expired', 'Expired'), ('stolen', 'Stolen')], default='sale', max_length=10),
        ),
    ]
