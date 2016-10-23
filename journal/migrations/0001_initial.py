# -*- coding: utf-8 -*-
# Generated by Django 1.9.10 on 2016-10-23 17:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('userpic', models.URLField()),
                ('url', models.URLField()),
                ('text', models.TextField()),
                ('like', models.PositiveIntegerField(default=0)),
                ('dislike', models.PositiveIntegerField(default=0)),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('userpic', models.URLField()),
                ('url', models.URLField()),
                ('text', models.TextField()),
                ('like', models.PositiveIntegerField(default=0)),
                ('dislike', models.PositiveIntegerField(default=0)),
                ('date', models.DateTimeField()),
                ('parent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='children', to='journal.Comment')),
            ],
        ),
    ]
