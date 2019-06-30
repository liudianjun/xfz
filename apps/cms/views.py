from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from django.views.generic import View
from django.views.decorators.http import require_POST,require_GET
from apps.news.models import New_Category
from utils import restful
from .forms import editCategoryForm, PubNews
import os
from django.conf import settings
from apps.news.models import News


# Create your views here.
def cms_login(request):
    return render(request, 'cms/login.html')


@staff_member_required(login_url='index')
def index(request):
    return render(request, 'cms/index.html')



class WriteNews(View):

    def get(self,request):
        categorys = New_Category.objects.all()
        context = {
            "categorys": categorys
        }
        return render(request, 'cms/writenews.html',context=context)

    def post(self, request):
        form = PubNews(request.POST)
        if form.is_valid():
            print("23423423423423")
            title = form.cleaned_data.get("title")
            desc = form.cleaned_data.get("desc")
            thumbnail = form.cleaned_data.get("thumbnail")
            content = form.cleaned_data.get("content")
            category_id = form.cleaned_data.get("category")
            # category = New_Category.objects.get(pk = category_id)

            News.objects.create(title=title, desc=desc,
                                thumbnail=thumbnail,content=content,
                                # category=category,
                                author=request.user)

            return restful.ok()
        else :
            print("111111")
            print(form.errors.get_json_data())
            return restful.params_error(message=form.get_error())


@require_GET
def category_new(request):
    categorys = New_Category.objects.all()
    content = {
        "categorys":categorys
    }
    return render(request, 'cms/CategoryNews.html', context=content)


@require_POST
def add_news_category(request):
    name = request.POST.get('name')
    print(name)
    exists = New_Category.objects.filter(name=name).exists()
    print(exists)
    if not exists:
        New_Category.objects.create(name=name)
        return restful.ok()
    else:
        return restful.params_error(message='分类已存在')

@require_POST
def edit_new_category(request):
    form = editCategoryForm(request.POST)
    if form.is_valid():

        pk = form.cleaned_data.get("pk")
        name = form.cleaned_data.get("name")
        print(pk, name)
        try:
            New_Category.objects.filter(pk=pk).update(name=name)
            return restful.ok()
        except:
            print('1212')
            return restful.params_error(message="该分类不存在")

    else:
        print('not valid', form.errors)
        return restful.params_error(message=form.get_error())

@require_POST
def delete_new_category(request):
    pk = request.POST.get("pk")
    try:
        New_Category.objects.filter(pk=pk).delete()
        return restful.ok()
    except:
        return restful.params_error(message="没有这个ID")

@require_POST
def upload_file(request):
    file = request.FILES.get("file")
    name = file.name

    with open(os.path.join(settings.MEDIA_ROOT, name), "wb") as f:
        for chunk in file.chunks():
            f.write(chunk)
    url = request.build_absolute_uri(settings.MEDIA_URL + name)
    return restful.result(data={"url":url})