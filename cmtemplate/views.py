from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Template
from .forms import TemplateCreateForm, TemplateUpdateForm

## TEMPLATE CRUD OPERATIONS
def get(request,name):
    qs = Template.objects.filter(template_name=name).values(
            "template_name", "description", "template_content")
    
    return JsonResponse(qs[0])

def create(request):
    form = TemplateCreateForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        temp = Template(
            template_name=cd["name"],
            description=cd["description"],
            template_content=cd["content"])
        temp.save()
    return redirect('cmtemplate:templates')

def update(request,name):
    form = TemplateUpdateForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        temp = Template.objects.get(template_name=name)
        temp.description = cd["description"]
        temp.template_content = cd["content"]
        temp.save()
    return redirect('cmtemplate:templates')

@csrf_exempt
def delete(request, name):
    temp = Template.objects.get(template_name=name)
    temp.delete()

    return redirect('cmtemplate:templates')

def getall(request):
    qs = Template.objects.values('template_name', 'description', 'created', 'updated')
    return JsonResponse({"data":list(qs)})

## TEMPLATE VIEW
def templates(request):
    
    createform = TemplateCreateForm()
    updateform = TemplateUpdateForm()
    context = {
        "active_page":"change-management / templates",
        "template_create_form":createform,
        "template_update_form":updateform,
        }

    return render(
        request, 
        'pages/change_management/templates.html',
        context=context)