function Banner() {
    console.log("----loop----");
    this.index = 1;
    this.arrowleft = $(".arrows-left");
    this.arrowright = $(".arrows-right");
    this.bannergroup = $("#banner-group");
    this.bannerul = $("#banner-ul");
    this.lilist = this.bannerul.children("li");
    this.bannercount = this.lilist.length;
    console.log(this.bannercount);
    this.pagecontrol = $(".page-control");



}

// 动态设置bannerul宽度
Banner.prototype.initbanner = function(){

    var self = this;
    var firstli = self.lilist.eq(0).clone();
    var lastli = self.lilist.eq(self.bannercount - 1).clone();
    self.bannerul.append(firstli);
    self.bannerul.prepend(lastli);
    self.bannerul.css({"width": (self.bannercount +2) * 798, "left":-798});

};
// 左右箭头
Banner.prototype.toggleArrow = function(isShow){

    if(isShow){
        this.arrowleft.show();
        this.arrowright.show();
    }else{
        this.arrowleft.hide();
        this.arrowright.hide();
    }
};
// 循环显示图片
Banner.prototype.animate = function(){
    var self = this;
    self.bannerul.animate({"left":-798 *  self.index}, 500 );
    var index = self.index;
    if(index === 0){
        index = self.bannercount - 1;
    }else if(index === self.bannercount + 1){
        index = 0;
    }else {
        index = self.index - 1;
    }
    self.pagecontrol.children("li").eq(index).addClass("active").siblings().removeClass("active");
};
// 添加圆圈
Banner.prototype.initpagecontrol = function(){

    var self = this;
    // var pagecontrol = $(".page-control");
    for(var i = 0; i < self.bannercount;i++){
        var circle = $("<li></li>");
        self.pagecontrol.append(circle);
        // circle.addClass("active");
        // if(i === 0) {
        //     circle.addClass("active");
        // }
        self.pagecontrol.css({"width": self.bannercount * 12 + 8 * 2 + 16 * (self.bannercount -1)});
    }

};
// 圆圈点击事件
Banner.prototype.listenpagecontrol = function(){

    var self = this;
    self.pagecontrol.children("li").each(function (index, obj) {
        $(obj).click(function () {

            self.index = index + 1;
            self.animate();
            // self.bannerul.animate({"left":-798 *  index}, 500 );
            // $(obj).addClass("active").siblings().removeClass("active");

        });

    });

};
// 箭头点击事件
Banner.prototype.listenArrowClick = function(){
    var self = this;
    self.arrowleft.click(function () {
        // this.index --;
        if(self.index === 0){
            self.bannerul.css({"left":self.bannercount * 798});
            self.index = self.bannercount - 1;
        }else {
            self.index --;
        }
        // self.bannerul.animate({"left":-798 *  self.index}, 500 );
        self.animate();

    });
    self.arrowright.click(function () {
        if(self.index === self.bannercount + 1){
            self.bannerul.css({"left":-798});
            self.index = 2;
        }else {
            self.index ++;
        }
        // self.bannerul.animate({"left":-798 *  self.index}, 500 );
        self.animate();
    });

};
// 鼠标放上去的事件
Banner.prototype.listenbannerhover = function(){

    // console.log('--------');
    var self = this;
    this.bannergroup.hover(function () {
        // 第一个函数是鼠标放上去执行的函数
        clearInterval(self.timer);
        self.toggleArrow(true);
    },function () {
        //第二个函数是鼠标拿走执行的函数
        self.loop();
        self.toggleArrow(false);

    });
};
// 循环控制
Banner.prototype.loop = function(){
    var self = this;
    console.log('----loop----');
    // var bannerUl = $("#banner-ul");
    // var index = 0;
    this.timer = setInterval(function () {
        if(self.index >= self.bannercount + 1){
            self.bannerul.css({"left": -798});
            self.index = 2;
        }
        else {
            self.index ++;
        }

        // bannerUl.animate({"left":-798 *  self.index}, 500 );
        self.animate();
    },2000);
};
// 执行函数
Banner.prototype.run = function () {
    // console.log('----run----');
    this.initbanner();
    this.initpagecontrol();
    this.loop();
    this.listenArrowClick();
    this.listenpagecontrol();
    this.listenbannerhover();

    // clearInterval(timer);
};



$(function () {
    var banner = new Banner();
    banner.run();

});
