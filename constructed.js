function Building() {}

Building.prototype.burn = function () {
  console.log('FIRE!');
};

module.exports = new Building();
