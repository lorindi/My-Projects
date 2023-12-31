# Generated by Django 4.2.2 on 2023-09-19 19:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('start_hour', models.TimeField()),
                ('end_hour', models.TimeField()),
                ('location', models.CharField(max_length=200)),
                ('organizers', models.CharField(max_length=200)),
                ('cover_image', models.ImageField(upload_to='event_covers/')),
                ('slide_presentation', models.FileField(blank=True, null=True, upload_to='event_presentations/')),
                ('topics', models.TextField()),
                ('contact_information', models.TextField()),
                ('youtube_link', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='EventRegistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_date', models.DateTimeField(auto_now_add=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.event')),
            ],
        ),
    ]
