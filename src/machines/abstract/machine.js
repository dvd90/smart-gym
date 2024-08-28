class Machine {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.isOn = false;
  }

  switch(state) {
    this.isOn = state;
    return `${this.name} turned ${state ? 'on' : 'off'}`;
  }

  toString() {
    return `${this.id},${this.name},${this.isOn ? 'on' : 'off'}`;
  }
}

module.exports = { Machine };
