/**
 * Created by wenheng on 2018/8/8.
 * 能力检测
 */


/**
 * 能力检测
 */

function getElement(id) {
    if(document.getElementById){
        return document.getElementById(id);
    }else if(document.all){
        return document.all[id];
    }else {
         throw  new Error("");
    }
}

//检查sort是不是函數
function  isSortable(object) {
    return typeof object.sort=="function";
}

//檢查某個函数是否存在
function  isHostMethod(object,property) {
    var t=typeof object[property];
    return t=='function' || (!!(t=='object' && object[property])) || t=='unknown'
}


/**
 * 怪癖检测
 */

var   hasDontEnumQuirk =function () {
     
}