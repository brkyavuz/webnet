from django.urls import path
from . import views

app_name = 'cmtemplate'

urlpatterns = [
    path('cm/templates/', views.templates, name='templates'),
    path('cm/templates/template/get/<str:name>', views.get, name='get'),
    path('cm/templates/template/create/', views.create, name='create'),
    path('cm/templates/template/update/<str:name>', views.update, name='update'),
    path('cm/templates/template/delete/<str:name>', views.delete, name='delete'),
    path('cm/templates/getall/', views.getall, name='getall'),
]