const { Machine } = require('./abstract/machine');

class AirSquatMachine extends Machine {
  constructor(id) {
    super(id, 'AirSquatMachine');
  }

  setWeight() {
    return 'Cannot set weight for AirSquatMachine';
  }
}

module.exports = { AirSquatMachine };
