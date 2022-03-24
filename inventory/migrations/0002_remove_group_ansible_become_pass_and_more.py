# Generated by Django 4.0.3 on 2022-03-24 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='ansible_become_pass',
        ),
        migrations.RemoveField(
            model_name='group',
            name='ansible_connection',
        ),
        migrations.RemoveField(
            model_name='group',
            name='ansible_network_os',
        ),
        migrations.RemoveField(
            model_name='group',
            name='ansible_password',
        ),
        migrations.RemoveField(
            model_name='group',
            name='ansible_user',
        ),
        migrations.RemoveField(
            model_name='host',
            name='groups',
        ),
        migrations.AddField(
            model_name='host',
            name='groups',
            field=models.ManyToManyField(default='ungrouped', to='inventory.group'),
        ),
    ]
