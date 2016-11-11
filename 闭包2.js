var n;

function f(){
  var b = "b";
  return function(){
    return b;
  }
}

// 函数f里面变量b是局部变量,函数f外部的函数是无法访问的
// 通过返回一个匿名函数 暴露出访问局部变量的接口 形成闭包

n = f();

console.log(n()); // b

// 通过运行函数f将访问局部变量的能力赋予全局变量n
