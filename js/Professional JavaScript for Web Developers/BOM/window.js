/**
 * Created by wenheng on 2018/7/19.
 * window对象
 */

/**
 * 全局作用域
 */
var age=29;
function sayAge() {
    alert(this.age);
}
alert(window.age);
sayAge();
window.sayAge();


/*
   窗口关系及框架
 */


/*
 * 窗口位置
 */
//var leftPos=(typeof  windos.screenLeft=="number")? window.screenLeft : window.screenX;

//將窗口移動到屏幕左上角
window.moveTo(0,0);

//將窗口向下移動100像素
window.moveBy(0,100);
//将窗口移动到 200 300
window.moveTo(200,300);

//姜茶un公开向做移动50像素
window.moveBy(-50,0);

/**
 * 窗口大小
 */
var pageWidth=window.innerWidth;
var pageHeight=window.innerHeight;

if(typeof pageWidth !="number"){
    if(document.compatMode=="CSS1Compat"){
        pageWidth=document.documentElement.clientWidth;
        pageHeight=document.documentElement.clientHeight;
    }else {
        pageWidth=document.body.clientWidth;
        pageHeight=document.body.clientHeight
    }
}
//调整浏览器窗口的新高度和新款度
window.resizeTo(100,100);
window.resizeBy(100,50);

/**
 * 导航和打开窗口
 */

window.open("https://www.baidu.com/","_blank,","height=400,width=400px,top=100");

/**
 * 间歇性和超时调用
 */

//超时调用
var  timeId=setTimeout("",1000);

clearTimeout(timeId); //取消調用


//间隙调用
var insid=setInterval("",1000);

clearInterval(insid);

//系統對話跨框
alert('');
confirm('');
prompt('aa','111');