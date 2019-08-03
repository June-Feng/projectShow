// function ac() {

//     var add = document.createElement("div");
//     document.getElementById("d1").appendChild(add);
//     alert("点击完成");
// }

// function day() {
//     var number = prompt("请输入一个数字：");
//     if (number >= 1) {
//         if (number % 7 == 0) {
//             alert(number + "天后是星期天");
//         } else {
//             alert(number + "天后是星期" + (number % 7));
//         }

//     } else if (number < 1) {
//         alert("请输入大于0的数字");
//     } else {
//         alert("请输入数字");

//     }

// }

// function triangle() {
//     for (var i = 1; i <= 4; i++) {
//         for (var k = 4 - i; k >= 0; k--) {
//             document.write("&nbsp");
//         }
//         for (var j = 0; j < (2 * i - 1); j++) {
//             document.write("*");
//         }
//         document.write("<br>");

//     }
//     for (var i = 3; i > 0; i--) {
//         for (var k = 4 - i; k > -1; k--) {
//             document.write("&nbsp");
//         }
//         for (var j = 0; j < (2 * i - 1); j++) {
//             document.write("*");
//         }
//         document.write("<br>");

//     }
// }

// function shuixianhuashu() {
//     for (i = 100; i < 1000; i++) {
//         var bai = parseInt(i / 100);
//         var shi = parseInt((i - bai * 100) / 10);
//         var ge = parseInt(i - bai * 100 - shi * 10);
//         if (bai * bai * bai + shi * shi * shi + ge * ge * ge == i) {
//             document.write(i + "<br>");
//         }
//     }
// }

// function deal() {
//     var toothbursh = 5;
//     var soap = 2;
//     var shampoo = 15;
//     var m = 0;
//     for (let k = 0; k <= 100 / shampoo; k++) {
//         for (i = 0; i <= 100 / toothbursh; i++) {
//             for (j = 0; j <= 100 / soap; j++) {
//                 if (toothbursh * i + soap * j + shampoo * k == 100) {
//                     m++;
//                 }
//             }
//         }

//     }
//     document.write("一共有" + m + "种可能，刚好花完100元。");
// }

// function with7() {
//     for (i = 0; i <= 100; i++) {
//         if (i % 7 == 0 || i % 10 == 7) {
//             document.write(i + "<br>");
//         }
//     }

// }

// function prime() {
//     for (i = 2; i < 100; i++) {
//         var flag = true;
//         for (j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 flag = false;
//             }

//         }
//         if (flag) {
//             document.write(i + "<br>");
//         }
//     }
// }

// function horse() {
//     for (b = 0; b <= 50; b++) {
//         for (m = 0; m <= 100; m++) {
//             for (s = 0; s <= 200; s++) {
//                 if (b + m + s == 100 && b * 2 + m + s / 2 == 100) {
//                     document.write("大马" + b + "匹，中马" + m + "匹，小马" + s + "匹，可完成<br>");
//                 }
//             }
//         }
//     }
// }

// function sesame() {
//     var sum = 1;
//     for (i = 1; i < 65; i++) {
//         sum = +sum * 2;
//     }
//     var weight = sum * 0.00001;
//     document.write("重量为" + weight);
// }

// function monkey() {
//     var num = 1;
//     for (i = 1; i < 7; i++) {
//         num = (num + 1) * 2;
//     }
//     document.write("第一天有" + num + "个桃子");
// }

// function array() {
//     var arr = [4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
//     var newarr = [];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             newarr.push(arr[i]);
//         }
//     }
//     document.write(newarr);
// }

// function remove() {
//     var arr1 = [2, 34, 2, 5, 6, 9, 8, 4, 34, 67, 6];
//     var flag = true;
//     for (i = 0; i < arr1.length; i++) {
//         for (j = i + 1; j < arr1.length; j++) {
//             if (arr1[i] == arr1[j]) {
//                 arr1.splice(j, 1);
//                 j--;
//             }
//         }

//     }
//     document.write(arr1);
// }

// function max() {
//     var arr2 = [12, 34, 2, 5, 76];
//     var max = 0;
//     for (i = 0; i < arr2.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (arr2[i] > arr2[j]) {
//                 max = arr2[i];
//             } else {
//                 max = arr2[j];
//             }
//         }
//     }
//     document.write("最大数为：" + max);
// }


// function add() {
//     var flag = true;
//     var num = prompt("请输入一个数字：");
//     var arr3 = [4, 8, 654, 53, 49, 58, 1, 7, 5, 3];
//     for (i = 0; i < arr3.length; i++) {
//         if (num == arr3[i]) {
//             flag = false;
//         }
//     }
//     if (flag) {
//         arr3.push(num);
//     }
//     document.write(arr3);
// }

// function random() {
//     var arr4 = [];
//     var num = 0;
//     for (i = 0; i < 10; i++) {
//         arr4.push(parseInt(Math.random() * 90 + 10));
//     }
//     document.write(arr4 + "<br>");
//     for (j = 0; j < arr4.length; j++) {
//         for (k = j + 1; k < arr4.length; k++) {
//             if (arr4[j] > arr4[k]) {
//                 num = arr4[j];
//                 arr4[j] = arr4[k];
//                 arr4[k] = num;
//             }
//         }
//     }
//     document.write(arr4);
// }


// 新建自定义指令
// Vue.directive('pin', function(el, binding) {
//     var pinned = binding.value;
//     var position = binding.modifiers; //bindng的修饰语
//     var warning = binding.arg; //binding的参数
//     // binding传的是指令的值和基本信息
//     console.log(position);
//     if (pinned) { //定义元素样式
//         el.style.position = 'fixed';

//         for (var key in position) {
//             if (position[key]) {
//                 el.style[key] = '10px';
//             }
//         }
//         // el.style.top = '10px';
//         // el.style.left = '10px';

//         if (warning === 'true') {
//             el.style.background = 'yellow';
//         } else {
//             el.style.background = '#ccc';
//         }
//     } 
// })

// // 新建过滤器
// Vue.filter('meter', function(val, unit) {
//     val = val || 0;
//     unit = unit || 'm';
//     return (val / 1000).toFixed(2) + unit;
// });

// Vue.filter('currency', function(val, unit) {
//     val = val || 0;
//     unit = unit || '元';
//     return val + unit;
// });

// new Vue({
//     el: '#d1',
//     data: {
//         price: 10,
//         len: 0,
//         card1: {
//             pinned: false,
//         },
//         card2: {
//             pinned: false,
//         },

//     }
// })


Vue.component('tooltip', {

});
Vue.component('popup', {

    template: '',
    methods: {
        toggle: function() {
            this.visible = !this.visible;
        }
    },
    data: function() {
        return {
            visible
        }
    }

})

new Vue({
    el: '#app',
    data: {

    }
})