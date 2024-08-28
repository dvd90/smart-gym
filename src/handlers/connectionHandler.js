class ConnectionHandler {
  constructor(socket, gymManager) {
    this.socket = socket;
    this.gymManager = gymManager;
  }

  handle() {
    console.log('New client connected');
    this.socket.setKeepAlive(true);

    let buffer = '';
    this.socket.on('data', (data) => {
      buffer += data.toString();

      while (buffer.includes('\n')) {
        const [command, ...rest] = buffer.split('\n');
        buffer = rest.join('\n');

        const response = this.processCommand(command.trim());
        if (this.socket.writable) {
          this.socket.write(response + '\n');
        }
      }
    });

    this.socket.on('end', () => {
      console.log('Client disconnected');
    });

    this.socket.on('error', (err) => {
      console.error('Socket error:', err);
    });
  }

  processCommand(command) {
    console.log('Received command:', command);
    const parts = command.split(' ');
    console.log(parts);

    if (parts.length === 0) return 'Invalid command';

    switch (parts[0]) {
      case 'showMachines':
        return this.gymManager.showMachines();
      case 'setWeight':
        if (parts.length !== 3) return 'Invalid command';

        return this.gymManager.setWeight(
          parseInt(parts[1]),
          parseFloat(parts[2])
        );
      case 'switch':
        if (parts.length !== 3) return 'Invalid command';

        return this.gymManager.switch(parseInt(parts[1]), parts[2]);
      default:
        return 'Unknown command';
    }
  }
}

module.exports = ConnectionHandler;
