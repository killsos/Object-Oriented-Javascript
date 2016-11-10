var a = 3;

function fn(){
  // var a = 2;

  function fn1(){
    var a = 1;
    return fn2();
  }

  function fn2(){
    return a;
  }

  return fn1();
}

console.log(fn());  // 2或3
