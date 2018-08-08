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

//my object
alert(object.getNameFunc());


////通过that=this 可以返回外部作用域
var name="The Window";
var object={
    name : "My Object",

    getNameFunc : function () {
        var that=this;
        return function () {
            return that.name;
        }
    }
};

//js真的是好奇怪，各种搞不懂

/**
 * 内存泄漏
 */
function assignHandler() {
    var element=document.getElementById("someElement");
    element.onclick=function () {
        alert(element.id);
    }
};



/**
 * 模仿块级作用域
 */

function outputNumbers(count) {

    for(var i=0;i<count;i++){
        alert(i);
    }
    alert(i);//记数
};
//i的值是不会改变的

//私有作用域
function outputNumbers(count) {
    (function () {
        for (var i=0;i<count;i++){
            alert(i);
        }
    })();

    alert(i);//错误
};
//用完立即销毁
/**
 * 私有变量
 */

function  add(num1,num2) {
    var sum=num1+num2;
    return sum;
}

function MyObject() {
    //私有变量和私有函数
    var privateVariable=10;
    
    function privateFunction() {
         return false;
    }

    //特权方法
    this.publicMethod=function () {
        privateVariable++;
        return privateFunction();
    }
    
};


function  Person(name) {
    this.getName=function () {
         return name;
    };
    
    this.setName=function (value) {
        name=value;
    };
}

var person=new Person("Nicholas");
alert(person.getName());

person.insertNode("Greg");
alert(person.getName());


/**
 * 静态私有变量
 */

(function () {
    //私有变量和私有函数
    var privateVariable=10;

    function privateFunction() {
        return false;
    }

    MyObject=function () {

    };

    MyObject.prototype.publicMethod=function () {
        privateVariable++;
        return privateFunction();
    }

})();


/**
 * 模块模式
 */

var application=function () {
    //私有变量和函数
    var components=new Array();
    
    //初始化
    components.push(new b());
    
    return{
         getComponentCount : function () {
             return components.length;
         },
        registerComponent : function (component) {
            if(typeof  component =="object"){
                 components.push(component);
            }
        }
    };
}();

