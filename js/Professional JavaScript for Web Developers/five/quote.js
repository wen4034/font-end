/**
 * Created by wenheng on 2018/7/11.
 */
function displayInfo(args) {
    var output="";

    if(typeof args.name=="string"){
        output+="Name:"+args.name+"\n";
    }
    if(typeof args.age=="number"){
        output+="Age:"+args.age+"\n";
    }
    alert(output);
}

displayInfo({name:"Nicholas",age:29});
displayInfo({name:"Greg"});


var person1={
    toLocaleString:function () {
        return "Nikolaos1"
    },
    toString:function () {
        return "Nicholas"
    }
};

var person2={
    toLocaleString:function () {
        return "Grigorios"
    },
    toString:function () {
        return "Greg"
    }
};

var people=[person1,person2];
alert(people);
alert(people.toString())
alert(people.toLocaleString());


var colors=new Array();
var count=colors.push("red","green");
alert(count);

count=colors.push("black");
alert(count);

var item=colors.pop();
alert(item);
alert(colors.length);

var color=["red","green","blue"];
var removed=colors.splice(0,1);
alert(color);
alert(removed);

removed=color.splice(1,0,"yellow","orange");
alert(color);
alert(removed);

removed=color.splice(1,1,"red","purple");
alert(color);
alert(removed); null

/** 迭代方法**/
var numbers=[1,2,3,4,5,4,3,2,1];
var everyResult=numbers.every(function (item, index, array) {
    return(item>2);
})

alert(everyResult)

var someResult=numbers.some(function (item, index, array) {
    return(item>2);
})

alert(someResult);

var filterResult=numbers.filter(function (item, index, array) {
    return(item>2);
});
alert(filterResult);

var mapResult=numbers.map(function (item, index, array) {
    return false;
});
alert(mapResult);

/**归并方法**/
var values=[1,2,3,4,5];
var sum=values.reduce(function (p1, p2, p3, p4) {
      return p1+p2;
})
alert(sum);
