const { Machine } = require('./abstract/machine');

class LegPress extends Machine {
  constructor(id, initialWeight) {
    super(id, 'LegPress');
    this.weight = initialWeight;
  }

  setWeight(weight) {
    this.weight = weight;
    return `LegPress weight set to ${weight}`;
  }

  toString() {
    return `${super.toString()},${this.weight}`;
  }
}

module.exports = { LegPress };
