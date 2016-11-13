function a(){
  //console.log("A");
  return function(){
    console.log("B");
  };
}

  a = a();

console.log(a.toString());
