# Generated by Django 4.2.2 on 2024-01-13 15:40

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cystic_fibrosis', '0003_cysticfibrosis_eighth_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='eighth_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='eighth_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='fifth_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='fifth_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='first_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='first_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='fourth_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='fourth_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='ninth_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='ninth_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='second_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='second_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='seventh_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='seventh_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='sixth_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='sixth_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='tenth_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='tenth_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='third_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='cysticfibrosis',
            name='third_title_of_description',
            field=models.CharField(blank=True, null=True, validators=[django.core.validators.MinLengthValidator(5)], verbose_name='Title'),
        ),
    ]
