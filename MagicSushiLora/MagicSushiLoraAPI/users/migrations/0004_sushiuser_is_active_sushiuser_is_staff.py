# Generated by Django 5.0.1 on 2024-01-21 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_sushiuser_options_alter_sushiuser_managers_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='sushiuser',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='sushiuser',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
