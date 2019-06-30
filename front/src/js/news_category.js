function Add_New_Catagory() {

}

Add_New_Catagory.prototype.run = function () {
    var self = this;
    self.listenAddBtn();
    self.listenEditBtn();
    self.listenDeleteBtn();
};
// 添加分类
Add_New_Catagory.prototype.listenAddBtn = function () {
    var self = this;
    var addbtn = $("#add-btn");
    addbtn.click(function () {
        xfzalert.alertOneInput({
            "title": "新增新闻分类",
            "placeholder": "请输入新闻分类",
            "confirmCallback": function (inputValue) {
                // window.location.reload()
                xfzajax.post({
                    "url": "/cms/add_category_news/",
                    "data": {
                        "name": inputValue
                    },
                    "success": function (result) {
                        // window.location.reload();
                        if (result["code"] === 200) {
                            window.location.reload();
                        }else {
                            xfzalert.close();
                        }
                    },

                });

            }
        })
    });
};
// 修改分类
Add_New_Catagory.prototype.listenEditBtn = function(){
    var self = this;
    var editbtn = $(".edit-btn");
    editbtn.click(function () {
        var self = $(this);
        var tr = editbtn.parent().parent();
        var pk = tr.attr("data-pk");
        var name = tr.attr("data-name");

        xfzalert.alertOneInput({
            "title":"修改分类名称",
            "placeholder":"请输入新分类名称",
            "value":name,
            "confirmCallback":function (inputValue) {
                xfzajax.post({
                    "url":"/cms/edit_category_news/",
                    "data":{
                        "pk":pk,
                        "name":inputValue
                    },
                    "success":function (result) {
                        if(result["code"] === 200){
                            window.location.reload()
                        }
                    }
                })
            },
        });
    });
};
// 删除分类
Add_New_Catagory.prototype.listenDeleteBtn = function(){
    var self = this;
    var deletebtn = $(".delete-btn");
    deletebtn.click(function () {
        var tr = deletebtn.parent().parent();
        var pk = tr.attr("data-pk");

        xfzalert.alertConfirm({
            'titlt':'警告',
            "confirmCallback":function () {
                xfzajax.post({
                    "url":"/cms/delete_category_news/",
                    "data":{
                        "pk":pk
                    },
                    "success":function (value) {
                        if(value["code"] === 200){
                            window.location.reload()
                        }
                    }
                })
            },
        })
    });
};



$(function () {
    var category = new Add_New_Catagory();
    category.run()
});