function f(){
  function makeClosure(x){  // 这个函数将每次执行i 锁定到函数体内了
    return function(){
      return x;
    }
  }

  var a = [];
  var i ;
  for(i =0; i < 3 ;i++){
    a[i] = makeClosure(i);
  }

  return a;
}

/**
 * 我们在这里创建了三个闭包，它们指向了一个共同的局部变量i,但是闭包并不会记录它们的值，它们
 * 所拥有的只是一个i的链接（引用）
 * a[0] a[1] a[2] 公共指向一个函数对象
 * 所以只能返回i的当前值
 * 由于循环结束时i的值为3 所以 这个函数对里面返回的i就是3了
 */

/**
 * 这里通过匿名自执行函数将a[0] a[1] a[2]指向三个不同函数对象，并且每个函数里面的x通过
 * 参数方式传递进去了
 */
