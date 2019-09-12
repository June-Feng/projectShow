$(document).ready(function() {
    $(".hidden").hide();
    $("#notebook").click(function() {
        $(".hidden").show();
        $("#testlist").hide();
        $("#notelist").show();
    })
    $("#test").click(function() {
        $(".hidden").show();
        $("#notelist").hide();
        $("#testlist").show();
    })
})

let myIcon = Vue.extend({
    template: `<a href="https://www.runoob.com/html/html-tutorial.html" class="icon" id="temp">\
    <h4><slot name="header">【学习HTML】<slot></h4>\
    <div class="box3">\
    <img src="../img/HTML-s.gif">\
    <strong><slot>HTML，即超文本标记语言（Hyper Text Markup Language）</slot></strong>\
    </div>\
    </a>`
})

Vue.component('my-icon', myIcon)

let app = new Vue({
    el: '#app',
})