function Auth() {
    var self = this;
    self.maskwapper = $('.mask-wrapper');
    self.signinbtn = $('.submit-btn');


}

Auth.prototype.run = function () {
    this.listenShowHideEvent();
    this.listenSigninBtn();
    this.listenImageCaptcha();
    this.listenSignupBtn();


    // this.listenSigninEvent();

};

Auth.prototype.showMask = function(){
    var self = this;
    self.maskwapper.show();
};

Auth.prototype.hideMask = function(){
    var self = this;
    self.maskwapper.hide();
};

Auth.prototype.listenShowHideEvent = function(){
    var self = this;
    var signinbtn = $(".signin-btn");
    var signupbtn = $('.signup-btn');
    var scroll_wrapper = $(".scroll-wrapper");
    var closebtn = $(".close-btn");
    var switchbtn = $(".switch");
    // $(".btn").click(function () {
    //     $(".mask-wrapper").show();
    // });
    signinbtn.click(function () {
        self.showMask();
        scroll_wrapper.css({"left":0});
        console.log("12121212");
    });

    signupbtn.click(function () {
        self.showMask();
        scroll_wrapper.css({"left":-400});
    });

    closebtn.click(function () {
        self.maskwapper.hide();
    });

    switchbtn.click(function () {
        var scroll_wrapper = $(".scroll-wrapper");
        var current_point = scroll_wrapper.css("left");
        current = parseInt(current_point);
        if(current < 0){
            scroll_wrapper.animate({"left":0});
        }else {
            scroll_wrapper.animate({"left":-400});
        }
    })

};

Auth.prototype.listenImageCaptcha = function(){
    var self = this;
    var imgCaptcha = $('.img-captcha');
    imgCaptcha.click(function () {
        imgCaptcha.attr("src", "/account/img_captcha/"+"?random="+Math.random());
    });
};

Auth.prototype.listenSigninBtn = function(){

    var self = this;
    var signingroup = $('.sign-in');

    var phoneNumber = signingroup.find("input[name='telephone']");
    var password = signingroup.find("input[name='pwd']");
    var remember = signingroup.find("input[name='remember']");
    var signinbtn = signingroup.find('.submit-btn');
    signinbtn.click(function () {
        // console.log("12121212121212");
        var telephone = phoneNumber.val();
        var pwd = password.val();
        var checkbox = remember.prop("checked");

        xfzajax.post({
            'url':'account/login/',
            'data':{
                'telephone':telephone,
                'password':pwd,
                'remember':checkbox?0:1
            },
            'success':function (result) {
                // console.log("=============");
                // console.log(result);
                if(result['code'] === 200){
                    self.hideMask();
                    window.location.reload();
                }else {
                    var messageobj = result['message'];
                    if(typeof messageobj === 'string' || messageobj.constructor
                    === String){
                        window.messageBox.show(messageobj);

                    }else {
                        for(var key in messageobj){
                            var messages = messageobj[key];
                            var message = messages[0];
                            window.messageBox.show(message);
                        }

                    }
                }
            },
            'fail':function (error) {
                console.log(error);
            },
        });

    });
};

Auth.prototype.listenSignupBtn = function(){
    var self = this;
    var signupgroup = $('.sign-up');
    var subimtbtn = signupgroup.find('.submit-btn');
    var telephoneinput = signupgroup.find("input[name='telephone']");
    var usernameinput = signupgroup.find("input[name='username']");
    var firstpwdinput = signupgroup.find("input[name='firstpwd']");
    var secpwdinput = signupgroup.find("input[name='secpwd']");
    var imgcaptchainput = signupgroup.find("input[name='img-captcha']");
    subimtbtn.click(function () {
        event.preventDefault();

        var telephone = telephoneinput.val();
        var username = usernameinput.val();
        var firstpwd = firstpwdinput.val();
        var secpwd = secpwdinput.val();
        var imgcaptcha = imgcaptchainput.val();
        console.log(telephone, username, firstpwd, secpwd, imgcaptcha);

        xfzajax.post({
            'url':'/account/register/',
            'data':{
                'username':username,
                'password1':firstpwd,
                'password2':secpwd,
                'img_captcha':imgcaptcha,
                'telephone':telephone
            },
            'success':function (result) {
                if(result['code'] ===200){
                    self.hideMask();
                    window.location.reload();
                }else {
                    var messageobj = result['message'];
                    if(typeof messageobj === 'string' || messageobj.constructor
                    === String){
                        window.messageBox.show(messageobj);

                    }else {
                        for(var key in messageobj){
                            var messages = messageobj[key];
                            var message = messages[0];
                            window.messageBox.show(message);
                        }

                    }
                }
            },
            'fail':function () {
                window.messageBox.showError(error);
            }
        });
    });



};


$(function () {
    // var self = this;
    var auth = new Auth();
    auth.run();
});