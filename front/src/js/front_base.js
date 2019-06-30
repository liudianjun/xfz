function UserMoreBox() {

}

UserMoreBox.prototype.run = function(){
    this.listenauthboxhover();
};

UserMoreBox.prototype.listenauthboxhover = function(){
    var authbox = $('.auth-box');
    var morebox = $('.user-more-box');
    authbox.hover(function () {
        morebox.show();
    },function () {
        morebox.hide();
    });
};

$(function () {
    var usermorebox = new UserMoreBox();
    usermorebox.run();
});