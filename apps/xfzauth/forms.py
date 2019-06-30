from django import forms
from apps.FormMixin import Form_Mixin
from django.core.cache import cache
from .models import User

class LoginForm(forms.Form, Form_Mixin):
    telephone = forms.CharField(max_length=11)
    # username = forms.CharField(max_length=200)
    password = forms.CharField(min_length=6)
    remember = forms.IntegerField(required=False)


class RegisterForm(forms.Form, Form_Mixin):
    telephone = forms.CharField(max_length=11)
    username = forms.CharField(max_length=20)
    password1 = forms.CharField(min_length=6, error_messages={"min_length":'密码最小长度6位'})
    password2 = forms.CharField(min_length=6, error_messages={"min_length":'密码最小长度6位'})
    # img_captcha = forms.CharField(max_length=4)

    def clean(self):
        cleaned_data = super(RegisterForm, self).clean()
        telephone = cleaned_data.get("telephone")
        password1 = cleaned_data.get('password1')
        password2 = cleaned_data.get('password2')
        # print(password1, password2)

        if password1 != password2:
            raise forms.ValidationError("密码不一致")

        # img_captcha = cleaned_data.get('img_captcha')
        # img_cache = cache.get(img_captcha.lower())
        # print(img_captcha, img_cache)
        # if not img_cache or img_cache!= img_captcha:
        #
        #     raise forms.ValidationError("图形验证码失败")
        exists = User.objects.filter(telephone=telephone).exists()
        if exists:
            raise forms.ValidationError("手机号码已注册")

        # return cleaned_data

