# Generated by Django 4.2.2 on 2023-09-28 14:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('initiatives', '0003_initiativeregistration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='initiative',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='initiatives_created', to=settings.AUTH_USER_MODEL),
        ),
    ]
