function closelogin() {
    document.getElementById("log1").style.display = "none";
}

function closeregister() {
    document.getElementById("reg1").style.display = "none";
}

function openlogin() {
    document.getElementById("log1").style.display = "block";
}

function openregister() {
    document.getElementById("reg1").style.display = "block";
}

$(document).ready(function() {
    $("#goodsInfo").click(function() {
        $("#goodsInfo").addClass("sele");
        $("#appr").removeClass("sele");
        $("#otherGood").removeClass("sele");
        $(".goodsDisc,.param,.show,.other").show();
        $(".eval").hide();
    });
    $("#appr").click(function() {
        $("#goodsInfo").removeClass("sele");
        $("#appr").addClass("sele");
        $("#otherGood").removeClass("sele");
        $(".eval").show();
        $(".goodsDisc,.param,.show,.other").hide();
    });
    $("#otherGood").click(function() {
        $("#goodsInfo").removeClass("sele");
        $("#appr").removeClass("sele");
        $("#otherGood").addClass("sele");
        $(".other").show();
        $(".eval,.goodsDisc,.param,.show").hide();
    });
    $(".logo").click(function() {
        window.location.replace("shop.html");
    })
    $(".cat,.floatItem").hover(function() { $(".list").show(); }, function() { $(".list").hide(); })
    var allHide = function() { $("#floatItem1,#floatItem2,#floatItem3,#floatItem4,#floatItem5,#floatItem6,#floatItem7,#floatItem8,#floatItem9").hide(); }
    $("#floatItem1").hover(function() {
        $("#floatItem1").show();
    }, function() { allHide(); })
    $("#floatItem2").hover(function() {
        $("#floatItem2").show();
    }, function() { allHide(); })
    $("#floatItem3").hover(function() {
        $("#floatItem3").show();
    }, function() { allHide(); })
    $("#floatItem4").hover(function() {
        $("#floatItem4").show();
    }, function() { allHide(); })
    $("#floatItem5").hover(function() {
        $("#floatItem5").show();
    }, function() { allHide(); })
    $("#floatItem6").hover(function() {
        $("#floatItem6").show();
    }, function() { allHide(); })
    $("#floatItem7").hover(function() {
        $("#floatItem7").show();
    }, function() { allHide(); })
    $("#floatItem8").hover(function() {
        $("#floatItem8").show();
    }, function() { allHide(); })
    $("#floatItem9").hover(function() {
        $("#floatItem9").show();
    }, function() { allHide(); })


    $("#item1").hover(function() {
            $("#floatItem1,.list").show();
            $("#floatItem2,#floatItem3,#floatItem4,#floatItem5,#floatItem6,#floatItem7,#floatItem8,#floatItem9").hide();
        },
        function() { allHide(); })
    $("#item2").hover(function() {
        $("#floatItem2,.list").show();
        $("#floatItem1,#floatItem3,#floatItem4,#floatItem5,#floatItem6,#floatItem7,#floatItem8,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item3").hover(function() {
        $("#floatItem3,.list").show();
        $("#floatItem1,#floatItem2,#floatItem4,#floatItem5,#floatItem6,#floatItem7,#floatItem8,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item4").hover(function() {
        $("#floatItem4,.list").show();
        $("#floatItem1,#floatItem2,#floatItem3,#floatItem5,#floatItem6,#floatItem7,#floatItem8,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item5").hover(function() {
        $("#floatItem5,.list").show();
        $("#floatItem1,#floatItem2,#floatItem3,#floatItem4,#floatItem6,#floatItem7,#floatItem8,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item6").hover(function() {
        $("#floatItem6,.list").show();
        $("#floatItem1,#floatItem2,#floatItem3,#floatItem4,#floatItem5,#floatItem7,#floatItem8,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item7").hover(function() {
        $("#floatItem7,.list").show();
        $("#floatItem1,#floatItem2,#floatItem3,#floatItem4,#floatItem5,#floatItem6,#floatItem8,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item8").hover(function() {
        $("#floatItem8,.list").show();
        $("#floatItem1,#floatItem2,#floatItem3,#floatItem4,#floatItem5,#floatItem6,#floatItem7,#floatItem9").hide();
    }, function() { allHide(); })
    $("#item9").hover(function() {
        $("#floatItem9,.list").show();
        $("#floatItem1,#floatItem2,#floatItem3,#floatItem4,#floatItem5,#floatItem6,#floatItem7,#floatItem8").hide();
    }, function() { allHide(); })
})

Vue.component('topnav', {
    template: `<div class="top-nav">
    <div class="container clearf">
        <div class="fl">
            <a class="item" href="shop.html">首页</a></div>
        <div class="fr">
            <a class="item" href="login.html" target="_blank">登录</a>
            <a class="item" href="register.html" target="_blank">注册</a>
            <a class="item" href="collect.html">收藏夹</a></div>
    </div>
</div>
`,
});

Vue.component('tophead', {
    template: `<div class="header">
    <div class="container clearf">
        <div class="col-2 logo">logo</div>
        <div class="col-5 search-bar">
            <input type="text" v-model="keyW">
            <button>搜索</button>
            <div class="keyW col-5"><span>{{keyW}}</span></div>
        </div>
        <div class="col-3 cart"><a href="cart.html">我的购物车</a></div>
    </div>
</div>`,
    data() {
        return { keyW: '女装' }
    },
})

Vue.component('bottomfoot', {
    template: `<div class="footer">
<a href="index.html">作品展示</a>
<div class="container">本页面解释权归june所有</div>
</div>`,
})



new Vue({
    el: '.app',
    data: {
        keyW: '女装',
        cartGoodNum: 1
    },
    computed: {},
    methods: {
        addGoodNum: function() {
            return ++this.cartGoodNum;

        },
        lessGoodNum: function() {
            if (this.cartGoodNum > 1) {
                return --this.cartGoodNum;
            } else {
                this.cartGoodNum = 1;
                alert("就留他一个吧QAQ");
            }
        }
    },

})