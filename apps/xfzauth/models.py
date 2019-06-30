from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin, BaseUserManager
from shortuuidfield import ShortUUIDField


class UserManager(BaseUserManager):

    def _creat_user(self, password, username, telephone, **kwargs):
        if not password:
            raise ValueError("请输入密码")

        if not username:
            raise ValueError("请输入用户名")

        if not telephone:
            raise ValueError("请输入电话")

        user = self.model(telephone=telephone, username=username,**kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_user(self, password, username, telephone, **kwargs):
        kwargs["is_superuser"] = False
        return self._creat_user(password=password, telephone=telephone, username=username,
                                **kwargs)

    def create_superuser(self, password, username, telephone, **kwargs):
        kwargs["is_superuser"] = True
        kwargs["is_staff"] = True
        return self._creat_user(password=password, telephone=telephone, username=username,
                                **kwargs)




# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    # 用shortuuid当做主键
    # shortuuidfield
    uid = ShortUUIDField(primary_key=True)
    telephone = models.CharField(max_length=11, unique=True)
    # password = models.CharField(max_length=200)
    email = models.EmailField(unique=True, null=True)
    username = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    data_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'telephone' # 唯一验证字段
    REQUIRED_FIELDS = ['username'] # 创建超级用户
    EMAIL_FIELD = 'email'

    objects = UserManager()

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username


