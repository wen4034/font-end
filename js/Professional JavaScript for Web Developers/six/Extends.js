/**
 * 继承
 * Created by wenheng on 2018/7/17.
 */


/*
   原型链
 */
function SuperType() {
    this.prototype=true;
}

SuperType.prototype.getSuperValue=function () {
    return this.prototype;
}

function SubType() {
    this.subproperty=false;
}

//继承了SuperType
SubType.prototype=new SuperType();

SubType.c.getSubValue=function () {
    return this.subproperty;
}

var instance=new SubType();
alert(instance.getSuperValue()); //true
alert(instance.getSubValue()); //true

//确定原型和实例的关系
alert(instance instanceof Object);
alert(instance instanceof  SuperType);
alert(instance instanceof  SubType);  //true

//or

alert(Object.prototype.isPrototypeOf(instance)) //true

//谨慎的定义方法
function SuperType() {
    this.property=true;
}

SuperType.prototype.getSuperValue=function () {
    return this.property;
}

function SubType() {
    this.subproperty=false;
}

//继承了SuperType
SubType.prototype=new SuperType();


//使用字面变量添加新方法，会导致上一行代码无效
SubType.prototype={
    getSubValue : function () {
        return this.subproperty;
    },
    someOtherMethod : function () {
        return false;
    }
};

var instance=new SubType();
//alert(instance.getSuperValue());
alert(instance.someOtherMethod());

/*
  原型链的问题
 */

function SuperType() {
    this.colors=["red","blue","green"];
}

function SubType() {
    this.subproperty=false;
}

//继承了SuperType
SubType.prototype=new SuperType();

var instance1=new SubType();
instance1.colors.push("black");

var instance2=new SubType();

alert(instance1.colors);
alert(instance2.colors); //instance2也加了 black

/**
 * 借用构造函数
 */
function SuperType() {
    this.colors=["red","blue","green"];
}

function SubType() {
    //继承了SuperType
    SuperType.call(this);
}

var instance1=new SubType();
instance1.colors.push("black");

var instance1=new SubType();
instance1.colors.push("black");
alert(instance1.colors);

var instance2=new SubType();
alert(instance2.colors);

//同时还可以传递参数
function SuperType(name) {
    this.name=name;
}

function SubType() {
    SubType.call(this,"Nicholas");
    this.age=29;
}

var instance=new SubType();
alert(instance.name);
alert(instance.age);

/**
 * 组合继承
 */
function SuperType(name) {
    this.name=name;
    this.color=["red","blue","green"];
}

SuperType.prototype=sayName=function () {
    alert(this.name);
};

function SubType(name,age) {
    SubType.call(this,name);
    this.age=age;
};

//繼承方法
SubType.prototype=new SuperType();
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function () {
    alert(this.age);
}
var instance1=new SubType("Nicholas",29);
instance1.colors.push("black");
alert(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2=new SubType("Nicholas",29);
instance2.colors.push("black");
alert(instance1.colors);
instance2.sayName();
instance2.sayAge();

/**
 *  原型式继承
 */

function object(o){
    function  F() {
    }
    F.prototype=o;
    return new F();
}

var person={
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};

var anotherPerson=object(person);
anotherPerson.name="Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson=object(person);
yetAnotherPerson.name="Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);

//Object.create()

var person={
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};

var anotherPerson=Object.create(person);
anotherPerson.name="Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson=Object.create(person);
yetAnotherPerson.name="Linda";
yetAnotherPerson.friends.push("Barbie");

/**
 * 寄生式继承
 */

function createAnother(original) {
    var clone=object(original);
    clone.sayHi=function () {
        alert("hi");
    };
    return clone;
};

/**
 * 寄生组合式继承
 */

function inheritPrototype(subType,superType) {
     var prototype=object(subType.prototype);//创建对象
     prototype.constructor=subType; //增强对象
     subType.prototype=prototype;//指定对象
}


function SuperType() {
     this.name=name;
     this.colors=["red","blue","green"];
}

SuperType.prototype.sayName=function () {
    alert(this.name);
}

function SubType(name,age) {
    SuperType.call(this.name);
    this.age=age;
}

inheritPrototype(SubType,SuperType);

