function Dog() {
    this.tail = true;
}

var benji = new Dog();
var rusty = new Dog();

/**
 * 即便是对象创建之后，我们也依然能为原型添加属性，并且所有的相关对象都可以
 * 随时访问这些新添加的属性
 */

 //Dog.prototype.say = function() {
     //console.log("汪汪");
 //};
 //benji.say();
 //rusty.say();


//console.log(benji.constructor); // [Function Dog]

//console.log(rusty.constructor); // [Function Dog]

console.log(rusty.constructor.prototype.constructor); // Dog是错误的
