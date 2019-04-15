var ForagerBee = function() {
  Bee.call(this);
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly = true;
  this.age = 10;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.forage = function(){
  this.treasureChest.push('treasure')
};
ForagerBee.prototype.constructor = ForagerBee;
