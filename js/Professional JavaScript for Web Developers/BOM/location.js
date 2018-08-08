/**
 * Created by wenheng on 2018/7/31.
 * location对象
 */

/**
 * 查询字符串参数
 */

function getQueryStringArgs() {
    //取得查询字符串并去掉开头的问号
    var qs=(location.search.length>0 ? location.search.substring(1):"");

    //保存数据的对象
    args={};

    //取得每一项
    items=qs.length?qs.split('&'):[], item=null, name=null, value=null, i=0,len=items.length;

    //逐个将每一项添加到args对象中
    for(i=0;i<len;i++){
        item=items[i].split("=");
        name=decodeURIComponent(item[0]);
        value=decodeURIComponent(item[1]);

        if(name.length){
            args[name]=value;
        }
    }
    return args;
};

/**
 * 位置操作
 */

window.location.assign("http://www.baidu.com"); //定位到信的位置

//改变以下的属性，页面也会重新加载URL
location.search;
location.hostname;
location.pathname;
location..port;

//后退
location.replace();

/**
 * navigator对象
 */

