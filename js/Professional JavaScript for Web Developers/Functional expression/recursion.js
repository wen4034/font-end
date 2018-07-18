/**
 * 函数表达式
 * Created by wenheng on 2018/7/17.
 */

/**
 * 递归
 */

function   factorial(num) {
    if(num<=1){
        return 1;
    }else {
        return num * factorial(num-1);
    }
};

//arguments.callee是指向正在执行的函数的指针

function factorial(num) {
    if(num<=1){
        return 1;
    }else {
        return num * arguments.callee(num - 1);
    }
};

//命名函数表达式
var factorial=(function f(num) {
    if(num<=1){
        return 1;
    } else {
        return  num * f(num-1);
    }
});

