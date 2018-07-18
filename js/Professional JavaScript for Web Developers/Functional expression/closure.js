/**
 * 闭包
 * Created by wenheng on 2018/7/17.
 */


function createComparisonFunction(propertyName){
    return function (object1,object2) {
        var value1=object1[propertyName];
        var value2=object2[propertyName];

        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else {
            return 0;
        }

    }
};

/**
 * 闭包与变量
 */

function  createaFunctions() {
    var result=new Array();

    for(var i=0;i<10;i++){
        result[i]=function () {
            return i;
        }
    }

    return result;
}


var result=createaFunctions();

for (var val in result) {
     alert(val);  //val全是10
};

//创建一个匿名函数强制让闭包行为符合预期
function  createaFunctions() {
    var result=new Array();

    for(var i=0;i<10;i++){
        result[i]=function (num) {
             return function () {
                 return num;
             }
        }(i);
    }

    return result;
}

/**
 * 关于this对象
 */

var name="The Window";
var object={
    name : "My Object",

    getNameFunc : function () {
        return function () {
            return this.name;
        }
    }
};