from email.policy import default
from django.db import models
# from django_cryptography.fields import encrypt


class Variable(models.Model):
    var_name = models.CharField(max_length=64,null=False, primary_key=True, unique=True)
    var_content = models.JSONField(blank=True, default=dict)

    def __str__(self):
        return self.var_name

class Group(models.Model):
    group_name = models.CharField(max_length=64,null=False, primary_key=True, unique=True)
    vars = models.ForeignKey(Variable, on_delete=models.SET_DEFAULT, default=dict)

    def __str__(self):
        return self.group_name

class Host(models.Model):
    name = models.CharField( max_length=64, null=False, primary_key=True, unique=True)
    ipaddr = models.GenericIPAddressField(unique=True, null=False, blank=False)
    groups = models.ManyToManyField(Group, blank=True, default="all")

    def __str__(self):
        return self.name
