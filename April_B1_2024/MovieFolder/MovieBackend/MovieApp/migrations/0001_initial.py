# Generated by Django 5.1.2 on 2024-10-23 05:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MovieDb',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=100)),
                ('Director', models.CharField(max_length=100)),
                ('Language', models.CharField(max_length=100)),
                ('Year', models.CharField(max_length=100)),
            ],
        ),
    ]
