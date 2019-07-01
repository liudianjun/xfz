function Index(){
    template.defaults.imports.timeSince = function (pubtime) {
        console.log("------");
        console.log(pubtime);
        console.log("------");
        var date = new Date(pubtime);
        var datets = date.getTime();
        var nowtime = (new Date().getTime());
        var timestap = (nowtime - datets) / 1000;
        if(timestap < 60){
            return "刚刚";
        }else if (timestap > 60 && timestap < 3600){
            minutes = parseInt(timestap / 60);
            return minutes+"分钟前";
        }else if (timestap > 60 && timestap < 3600 * 24){
            hours = parseInt(timestap / 3600);
            return hours+"小时前";
        }else if (timestap > 60 && timestap < 3600 *24 *30){
            day = parseInt(timestap / (3600 * 24));
            return day+"天前";
        }else {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDay();
            var hours = date.getHours();

            return year+"/"+month+"/" + day+"/"

        }    };
}

Index.prototype.run = function(){
    this.listenLoadMoreBtn();
    console.log("index------------")
};

Index.prototype.listenLoadMoreBtn = function(){
    var self = this;
    var loadmorebtn = $("#load-more-btn");
    var page = 2;
    loadmorebtn.click(function () {
        // var page = 2;
        xfzajax.get({

            "url":"/new/list/",
            "data":{
                "p":page,
            },
            "success":function (result) {
                if(result["code"] === 200){

                    var newses = result["data"];
                    // console.log(result["data"])
                    if(newses.length > 0){
                        var tp1 = template("newsitem", {
                        "newses" : newses
                    });
                    var ul = $('.list-inner-group');
                    ul.append(tp1);
                    page += 1;
                    }else {
                        loadmorebtn.hide();
                    }

                }
            }
        });

    });
};

$(function () {

    var index = new Index();
    index.run();
});