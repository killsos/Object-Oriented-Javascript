var str = "string";
var num = 123;
var bol = true;
var a;
var obj ={};
var fn1 = function fn2 (){
    console.log("fn2")
}
function fn3 (){}

console.log(typeof str,"<br>");
console.log(typeof num,"<br>");
console.log(typeof bol,"<br>");
console.log(typeof a,"<br>");
console.log(typeof obj,"<br>");
console.log(typeof fn1,"<br>");
console.log(typeof fn2,"<br>"); // fn2 undefiend 也无法调用
console.log(typeof fn3,"<br>");

// fn2();
var aa = null;
function  isNull(input){
    return  (!input && (typeof input === 'object') ? true :  false) ;
}

console.log(isNull(aa))