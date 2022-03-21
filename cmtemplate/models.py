from django.db import models

# Create your models here.
class Template(models.Model):
    template_name = models.CharField(max_length=64,blank=False, null=False, primary_key=True, unique=True)
    description = models.CharField(max_length=128, blank=True)
    template_content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.template_name