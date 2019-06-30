function News() {

}

News.prototype.listenUploadBtn = function(){
    var self = this;
    var uploadBtn = $("#upload-btn");
    uploadBtn.change(function () {
        var file = uploadBtn[0].files[0];
        var formData = new FormData();
        formData.append("file",file);

        xfzajax.post({
            "url":"/cms/upload_file/",
            "data":formData,
            "processData":false,
            "contentType":false,
            "success":function (result) {
                if(result["code"] ===200){
                    // console.log(result["data"]);
                    var thumbnailInput = $("#thumbnail-form");
                    thumbnailInput.val(result["data"]["url"]);
                }
            },
        });
    });
};

News.prototype.initUEditor = function(){
    var self = this;
    window.ue = UE.getEditor("editor", {
        "initialFrameHeight":300,
        //上传图片 视频
        "serverUrl":"/ueditor/upload/",
        // 上传方式

    });

};

News.prototype.listenPubNews = function(){
    var self = this;
    var pubbtn = $("#pub-btn");
    pubbtn.click(function (event) {
        event.preventDefault();
        var title = $("input[name='title']").val();
        // var category = $("select [name='category']").val();
        var desc = $("input[name='desc']").val();
        var thumbnail = $("input[name='thumbnail']").val();
        var content = window.ue.getContent();
        console.log(title);
        // console.log(category);

        xfzajax.post({
            "url":"/cms/writenews",
            "data":{
                "title":title,
                "category":5,
                "desc":desc,
                "thumbnail":thumbnail,
                "content":content,

            },
            "success":function (result) {

                if(result["code"] === 200){
                    xfzalert.alertSuccess("发布成功", function () {
                        window.location.reload()
                    })
                }

            }
        })


    });
};
News.prototype.run = function(){
    this.listenUploadBtn();
    this.initUEditor();
    this.listenPubNews();
};

$(function () {
   var news = new News();
    news.run()
});