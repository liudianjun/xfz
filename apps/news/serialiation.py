from rest_framework import serializers
from .models import News, New_Category
from apps.xfzauth.serialiation import UserSerializers

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = New_Category
        fields = ("id","name")

class NewsSerializers(serializers.ModelSerializer):

    category = CategorySerializers()
    author = UserSerializers()
    class Meta:
        model = News
        fields = ("id", "author", "title", "desc", "thumbnail", "pubtime", "category")