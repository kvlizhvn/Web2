# Generated by Django 3.1 on 2021-04-20 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20210420_0102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='image',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.CharField(max_length=300, null=True),
        ),
    ]
