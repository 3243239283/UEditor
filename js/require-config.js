/**
 * Created by Administrator on 2016/3/21.
 */
/*
 require.config是用来配置模块加载位置，简单点说就是给模块起一个更短更好记的名字，
 比如将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js，
 本地的js我们也可以这样配置：
 require.config({
 paths : {
 "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]
 }
 })
 */
//如果这些模块在其他目录，比如js/lib目录，则有两种写法。逐一/统一 指定路径。
//1、统一指定模块路径
/*
 require.config({
 baseUrl:"js/indexJS/",    //当各个模块路径统一时，可以一次性制定路径。否则需要单独制定各个模块的路径。
 paths: {
 "jquery": "jquery",
 "a": "boss",
 "b": "all"
 }
 });
 */
//2、逐一制定模块路径
require.config({
    baseUrl:"plugin/",
    paths: {
        //js
        "jquery": "jquery/jquery.min",                //加载jquery
        "layer":"layer/layer",                        //layer插件路径加载
        "validate":"validata/jquery.validate",        //表单验证插件
        "ueditor":"ueditor/ueditor.all",
        "ueditorconfig":"ueditor/ueditor.config",
        //css
        "layercss": "layer/skin/layer"
    },
    waitSeconds: 10 ,
    //加载layer插件需要的css之前需要的require外部插件css.js
    map: {
        '*': {
            'cssjs': 'requirejs/css',
        }
    },
    
    shim:{
        //调用layer之前，必须先加载jquery.js。layer插件需要在jq的环境下才能运行。
        "layer":{
            deps:['jquery'],
            exports:"layer"
        }
    }

});
//（以上方法可以二选一）