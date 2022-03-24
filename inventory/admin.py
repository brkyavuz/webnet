from django.contrib import admin
from .models import Group, Host, Variable
# Register your models here.
admin.site.register(Group)
admin.site.register(Host)
admin.site.register(Variable)
