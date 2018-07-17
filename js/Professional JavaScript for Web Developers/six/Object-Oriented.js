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

//理解原型模式
function Person() {

}

Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function () {
    alert(this.name);
};

var person1=new Person();
var person2=new Person();
person1.name="Greg";
alert(person1.name) //来自实例
alert(person2.name) //来自原型

delete  person1.name;
alert(person1.name) //删除实例回到原型模式

//hasOwnProperty()方法检测属性是否存在与实例中，还是存在原型中
alert(person1.hasOwnProperty("name"));
alert(person2.hasOwnProperty("name"));

//原型与in操作符
//in操作符会在通过对象能够访问给定属性返回true
alert("name" in  person1);

//如果要取得对象上可枚举的实例属性，可以使用es5的object.keys()方法，这个方法接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组
var keys=Object.keys(Person.prototype);
alert(keys);

var plkeys=Object.keys(person1);
alert(plkeys);


//如果要得到所有实例属性，无论是否可枚举都可以使用 Object.getOwnPropertyNames();
var keys= Object.getOwnPropertyNames(Person.prototype);
alert(keys);

//更简单的原型语法
function  Person() {
}

Person.prototype={
    constructor:Person,  //加上这个 不加相当于重写
    name: "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
}

//以上写法将导致constructor 比较无法确定对象的类型
var friend=new Person();
friend.constructor==Person; //false


/**
 * 原型的动态性
 **/

//原型对象的问题
Person.prototype={
    constructor:Person,  //加上这个 不加相当于重写
    name: "Nicholas",
    age : 29,
    job : "Software Engineer",
    friends : ["1","2"],
    sayName : function () {
        alert(this.name);
    }
}


var person1=new Person();
var person2=new Person();

person1.friends.push("van");
alert(person1.friends);
alert(person1.friends);


/**
 * 组合使用构造函数模式和原型模式
 */

function Person(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["Shelby","Court"];
}
Person.prototype={
    constructor :Person,
    sayName:function () {
        alert(this.name);
    }
}

var Person1=new Person("Nichoals",29,"Software Engineer");
var Person2=new Person("Nichols",29,"Software");


person1.friends.push("Van");


/**
 * 动态原型模式
 */

function Person(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["Shelby","Court"];
    
    if(typeof this.sayName!="function"){
        Person.prototype.sayName=function () {
            alert(this.name);
        }
    }
}

var friend=new Person("Nicholas",29,"Software Engineer");
friend.sayName();

/**
 * 寄生构造函数模式
 */

function Person(name,age,job) {

    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.friends=["Shelby","Court"];

    o.sayName=function () {
        alert(this.name);
    };
    return 0;
}

//这个模式可以在特殊的情况下用来为对象创建构造函数。

function SpecislArray() {

    //创建数组
    var values=new Array();

    //添加值
    values.push.apply(values,arguments);

    //添加方法
    values.toPipedString=function () {
        return this.join("|");
    };

    //返回数组
    return values;
}

var colors=new SpecislArray("red","blue","green");
alert(colors.toPipedString());

/**
 * 稳妥构造函数模式
 */


