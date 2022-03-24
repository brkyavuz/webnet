from django.shortcuts import render,redirect
from django.http import JsonResponse,HttpResponse
from .models import Group, Host, Variable


## INVENTORY VIEW
def inventory(request):
    
    # createform = TemplateCreateForm()
    # updateform = TemplateUpdateForm()
    # context = {
    #     "active_page":"change-management / templates",
    #     "template_create_form":createform,
    #     "template_update_form":updateform,
    #     }
    context =  {"active_page":"inventory"}
    hostqs = Host.objects.filter(groups__in=["all"])

    print("x"*50)
    print(hostqs)
    print("x"*50)
    return render(
        request, 
        'pages/inventory/inventory.html',
        context=context)