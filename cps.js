var a = "hello";
function str1 (str, callBack){
    callBack(str);
}
str1(a, function(a){
    console.log(a[0]);
});