from django import forms

class TemplateCreateForm(forms.Form):
    name = forms.CharField(label="Template Name", max_length=64)
    description = forms.CharField(label="Template Description", max_length=128, required=False)
    content = forms.CharField(widget=forms.Textarea, required=False, label="Template Content")

class TemplateUpdateForm(forms.Form):
    description = forms.CharField(widget=forms.TextInput(attrs={"class":"fake-description-class"}), label="Description", max_length=128, required=False)
    content = forms.CharField(widget=forms.Textarea(attrs={"class":"fake-content-class"}), required=False)