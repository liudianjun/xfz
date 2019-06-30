function Auth() {
    this.maskwapper = $('.mask-wrapper');
}

Auth.prototype.run = function () {
    this.listenShowHideEvent();
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
    var siginbtn = $("#btn");

    siginbtn.click(function () {
        self.showMask();
        console.log('1212121');
    });

};

$(function () {
    // var self = this;
    var auth = new Auth();
    auth.run();
});
