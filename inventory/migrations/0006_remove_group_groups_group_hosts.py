# Generated by Django 4.0.3 on 2022-03-24 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0005_variable_remove_host_groups_group_groups_group_vars'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='groups',
        ),
        migrations.AddField(
            model_name='group',
            name='hosts',
            field=models.ManyToManyField(default=['ungrouped'], to='inventory.host'),
        ),
    ]
