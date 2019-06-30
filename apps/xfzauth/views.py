from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.http import require_POST
from .forms import LoginForm,RegisterForm
from django.shortcuts import redirect,reverse
from utils.captcha.xfzcaptcha import Captcha
from io import BytesIO
from django.http import HttpResponse
from django.core.cache import cache
from django.contrib.auth import get_user_model
from utils import restful

User = get_user_model()

# Create your views here.
@require_POST
def login_view(request):
    '''
    登录验证
    :param request:
    :return:
    '''
    form = LoginForm(request.POST)
    if form.is_valid():
        password = form.cleaned_data.get('password')
        telephone = form.cleaned_data.get("telephone")
        remember = form.cleaned_data.get('remember')
        user = authenticate(request, username = telephone, password=password)
        if user:
            if user.is_active:
                login(request, user)
                if remember:
                    request.session.set_expiry(None)
                    # 默认设置两周
                else:
                    # 关闭浏览器删除session
                    request.session.set_expiry(0)
                return JsonResponse({'code':200, 'message':'ok', 'data':{}})
            else:return JsonResponse({'code':405, 'message':'没有权限', 'data':{}})

        else:
            return JsonResponse({'code':400, 'message':'参数错误', 'data':{}})
    else:
        error = form.get_error()
        return JsonResponse({'code':400, 'message':'', 'data':error})

def logout_view(request):
    logout(request)
    return redirect(reverse('index'))

def get_captcha(request):
    text, image = Captcha.gene_code()
    out = BytesIO()
    # 将image对象保存到out中
    image.save(out, 'png')
    # 把指针的位置移动到开始的位置
    out.seek(0)
    response = HttpResponse(content_type='image/png')
    # 读取图片数据 保存到response中
    response.write(out.read())
    # 设置图片大小
    response['Content-length'] = out.tell()

    # 12Df 12df
    cache.set(text.lower(), text.lower(), 5*60)


    return response
#
def catch_text(request):
    cache.set("username", 'zhiliao', 40)
    result = cache.get('username')
    print(result)
    return HttpResponse('success')


@require_POST
def register(request):
    form = RegisterForm(request.POST)
    # form.clean()
    # print(form.clean())
    # print(form.password2)
    if form.is_valid():
        print('okokkokokok')
        telephone = form.cleaned_data.get('telephone')
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')

        user = User.objects.create_user(telephone=telephone, username=username, password=password)

        login(request, user)

        return restful.ok()

    else:
        print('nonononookokkokokok')
        print(form.errors.get_json_data())
        # telephone = form.cleaned_data.get('telephone')
        # print(telephone)
        return restful.method_error(message=form.get_error())
