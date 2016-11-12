var tree = {};

tree.decorate = function(){
  console.log('Make sure the tree');
};

tree.getDecorator = function(deco){
  tree[deco].prototype = this;
  console.log(this);
  //return new tree[deco];
};

tree.RedBall = function(){
  //console.log(this);
  this.decorate = function(){
    this.decorate = function (){
      this.RedBall.prototype.decorate();
      console.log("RedBall");
    };
  };
};

tree.getDecorator("RedBall");
