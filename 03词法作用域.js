
function fn1(){
  var a = 1;
  fn2();
}

function fn2(){
  return a;
}

console.log(fn1());  // ReferenceError: a is not defined
