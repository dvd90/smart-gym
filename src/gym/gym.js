const { AirSquatMachine } = require('../machines/airSquatMachine');
const { LegPress } = require('../machines/legPress');

class Gym {
  constructor() {
    this.machines = {
      1: new AirSquatMachine(1),
      2: new LegPress(2, 100)
    };
  }

  showMachines() {
    return Object.values(this.machines)
      .map((machine) => machine.toString())
      .join('\n');
  }

  setWeight(machineId, weight) {
    const machine = this.machines[machineId];
    if (!machine) {
      return `Machine ${machineId} not found`;
    }

    return `${machine.setWeight(weight)}\n${this.showMachines()}`;
  }

  switch(machineId, state) {
    const machine = this.machines[machineId];
    if (!machine) {
      return `Machine ${machineId} not found`;
    }
    const isOn = state === 'on';

    return `${machine.switch(isOn)}\n${this.showMachines()}`;
  }
}

module.exports = Gym;
