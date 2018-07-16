/**
 * Created by wenheng on 2018/7/15.
 */

/** 理解对象**/
var person={
    name :"Nicholas",
    age : "Software Engineer",

    sayName : function () {
        alert(this.name);
    }
}


//访问器属性

var book={
    _year:2004,
    edition:1
};

Object.defineProperty(book,"year",{
    get : function () {
        return 1;
    },

    set : function (newValue) {
        if(newValue>2004){
            this._year=newValue;
            this.edition=111;
        }
    }
});


book.year=2005;
alert(book.edition);


//定义多个属性
Object.defineProperties(book,{
    _year:{
        writable:true,
        value : 2004
    },

    edition : {
        writable:true,
        value : 1
    },

    get : function () {
        return 1;
    },

    set : function (newValue) {
        if(newValue>2004){
            this._year=newValue;
            this.edition=111;
        }
    }
});

//读取属性的特征

var  descriptor=Object.getOwnPropertyDescriptor(book,"_year");
alert(descriptor.valueOf());
alert(descriptor.configurable);
alert(typeof  descriptor.get);


/**创建对象**/

//工厂模式
function createPerson(name,age,job) {
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function () {
        alert(this.name);
    }
    return o;
}

var person1=createPerson("Nicholas",29,"Software Engineer");

//构造函数模式
function  Person(name,age,job) {
    this.name=name;
    this,age=age;
    this.job=job;
    this.sayName=function () {
        alert(this.name);
    };
}

var person2=new Person("Nicholas",29,"Software Engineer");

//原型模式

function Person() {

}

Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function () {
    alert(this.name);
};

var person1=new Person();
person1.sayName();
