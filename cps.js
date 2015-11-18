var a = "hello";



function str1 (str, callBack){
    callBack(str[0]);
}




str1(a, function(a){
    console.log(a);
});

function str2 (str, callback){
    callback(str[str.length-1]);
}
str2(a, function(a){
    console.log(a);
});

function str3 (str, cb){
    cb(str[0], str[str.length - 1]);
}
str3(a, function(b,c){
    console.log(b+c);
});