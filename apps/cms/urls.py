from django.urls import path
from . import views
# from .views import WriteNews

app_name = 'cms'

urlpatterns = [
    path("login/", views.cms_login, name='cms_login'),
    path("", views.index, name='index'),
    path("writenews", views.WriteNews.as_view(), name='writenews'),
    path("categorynews/", views.category_new, name='category'),
    path("add_category_news/", views.add_news_category, name='add_news_category'),
    path("edit_category_news/", views.edit_new_category, name='edit_news_category'),
    path("delete_category_news/", views.delete_new_category, name='delete_news_category'),
    path("upload_file/", views.upload_file, name='upload_file'),
]