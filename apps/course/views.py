from django.shortcuts import render

# Create your views here.

def course_index(request):
    return render(request, "course/course_index.html")

def course_detail(request):
    return render(request, 'course/detail.html')
