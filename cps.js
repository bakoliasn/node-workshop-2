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