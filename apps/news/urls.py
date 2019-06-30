from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [

    path('<int:new_id>/', views.new_detail, name='new_detail'),
    path('list/', views.news_list, name='news_list')
]