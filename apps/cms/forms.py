from django import forms
from apps import FormMixin
from apps.news.models import News

class editCategoryForm(forms.Form, FormMixin.Form_Mixin):

    pk = forms.IntegerField()
    name = forms.CharField(max_length=100)



class PubNews(forms.ModelForm, FormMixin.Form_Mixin):

    # category = forms.IntegerField()
    class Meta:
        model = News
        exclude = ["category", "pubtime", "author"]