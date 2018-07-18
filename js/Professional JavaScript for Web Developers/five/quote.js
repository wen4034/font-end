/**
 * Created by wenheng on 2018/7/11.
 */
function displayInfo(args) {
    var output = "";

    if (typeof args.name == "string") {
        output += "Name:" + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age:" + args.age + "\n";
    }
    alert(output);
}

displayInfo({name: "Nicholas", age: 29});
displayInfo({name: "Greg"});


var person1 = {
    toLocaleString: function () {
        return "Nikolaos1"
    },
    toString: function () {
        return "Nicholas"
    }
};

var person2 = {
    toLocaleString: function () {
        return "Grigorios"
    },
    toString: function () {
        return "Greg"
    }
};

var people = [person1, person2];
alert(people);
alert(people.toString())
alert(people.toLocaleString());


var colors = new Array();
var count = colors.push("red", "green");
alert(count);

count = colors.push("black");
alert(count);

var item = colors.pop();
alert(item);
alert(colors.length);

var color = ["red", "green", "blue"];
var removed = colors.splice(0, 1);
alert(color);
alert(removed);

removed = color.splice(1, 0, "yellow", "orange");
alert(color);
alert(removed);

removed = color.splice(1, 1, "red", "purple");
alert(color);
alert(removed);
null

/** 迭代方法**/
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every(function (item, index, array) {
    return (item > 2);
})

alert(everyResult)

var someResult = numbers.some(function (item, index, array) {
    return (item > 2);
})

alert(someResult);

var filterResult = numbers.filter(function (item, index, array) {
    return (item > 2);
});
alert(filterResult);

var mapResult = numbers.map(function (item, index, array) {
    return false;
});
alert(mapResult);

/**归并方法**/
var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (p1, p2, p3, p4) {
    return p1 + p2;
})
alert(sum);

/**RegExp**/
var pattern1 = /\[bc\]at/i;
alert(pattern1.global);
alert(pattern1.ignoreCase);
alert(pattern1.multiline);
alert(pattern1.lastIndex);
alert(pattern1.source);

var text = "cat. bat. sat. fat";
var pattern2 = /.at/;

var mathces = pattern2.exec(text);
alert(mathces.index);
alert(mathces[0]);
alert(pattern2.lastIndex);

var pattern3 = /.at/g;

var mathces = pattern3.exec(text);
alert(mathces.index);
alert(mathces[0]);
alert(mathces.lastIndex);

var text = "this has been a short summer";
var pattern = /(.)hort/g;

if (pattern1.test(text)) {
    alert(RegExp.input);
    alert(RegExp.leftContext);
    alert(RegExp.rightContext);
    alert(RegExp.lastMatch);
    alert(RegExp.lastParen);
    alert(RegExp.mul);
}


/**function类型**/
function sum(num1, num2) {
    return num1 + num2;
}
alert(sum(10,10));
var anotherSum=sum;
alert(anotherSum(10,10));


function callSomeFunction(someFunction,someArgument) {
     return someFunction(someArgument);
}


function add10(num) {
    return num+10;
}

var result1=callSomeFunction(add10,10);
alert(result1);

function getGreeting(name) {
    return "Hello,"+name;
}

var result2=callSomeFunction(getGreeting,"Nicholas");
alert(result2);

/**sort**/
function   createComparisonFunction(propertyName) {
    return function (object1,object2) {
        var value1=object1[propertyName];
        var value2=object2[propertyName];

        if(value1<value2){
            return 1;
        }else if(value1>value2){
            return -1;
        }else {
            return 0;
        }
    }
}

var data=[{name:"Zachary","age":28},{name:"Nicholas",age:29}];
data.sort(createComparisonFunction("name"));
alert(data[0].name);
data.sort(createComparisonFunction("age"));
alert(data[0].name);

/****/

function  sum(num1,num2) {
    return num1+num2;
}

function callSum1(num1,num2) {
    return sum.apply(this,arguments);
}
function callSum2(num1,num2) {
    return sum.apply(this,[num1,num2]);
}

alert(callSum1(10,10));
alert(callSum2(10,10));

/**apply call**/
window.color="red";
var o={color:"blue"};

function  sayColor() {
    alert(this.color);
}

sayColor();

sayColor().call(this);
sayColor().call(window);
sayColor().call(o);

/**基本包装类型**/
var s1="some text";
s1.color="red";
alert(s1);


/**String.replace**/
function htmlEscape() {
}

/**单体内置对象**/
var msg="hello world";
eval("alert(msg)");


/**random方法**/
function selectFrom(lowerValue,upperValue) {
    var choices=upperValue-lowerValue+1;
    return Math.floor(Math.random()* choices+lowerValue);
}


