from django.db import models

# Create your models here.
class New_Category(models.Model):
    name = models.CharField(max_length=100)

class News(models.Model):
    title = models.CharField(max_length=200)
    desc = models.CharField(max_length=200)
    thumbnail = models.URLField(null=True)
    content = models.TextField()
    pubtime = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey("New_Category", on_delete=models.SET_NULL, null=True)
    author = models.ForeignKey("xfzauth.User", on_delete=models.SET_NULL, null=True)
