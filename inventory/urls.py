from django.urls import path
from . import views

app_name = 'inventory'

urlpatterns = [
    path('inventory/', views.inventory, name='inventory'),
]