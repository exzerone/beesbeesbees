var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);

RetiredForagerBee.prototype.gamble = function(){
  if (this.job === 'gamble'){
    this.treasureChest.push('treasure');
  }
}

RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
}

RetiredForagerBee.prototype.constructor = RetiredForagerBee;