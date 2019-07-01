from django.shortcuts import render
from .models import News, New_Category
from django.conf import settings
from .serialiation import NewsSerializers
from utils import restful
from django.http import Http404

# Create your views here.

def index(request):
    count = settings.ONE_PAGE_COUNT
    # newses = News.objects.all()
    newses = News.objects.order_by("-pubtime")[0:count]

    categories = New_Category.objects.all()
    context = {
        "newses":newses,
        "category":categories,
    }
    return render(request, 'new/index.html', context=context)

def new_detail(request, new_id):
    try:
        news = News.objects.get(pk=new_id)
        context = {
            "news":news
        }
        return render(request, "new/news_detail.html", context=context)
    except:
        raise Http404

def news_list(request):
    # 获取第几页参数，如果没有默认是1
    page = int(request.GET.get("p",1))
    start_page = (page-1) * settings.ONE_PAGE_COUNT
    end_page = page + settings.ONE_PAGE_COUNT
    newses = News.objects.order_by("-pubtime")[start_page:end_page]

    serializer = NewsSerializers(newses, many=True)
    data = serializer.data
    return restful.result(data=data)

