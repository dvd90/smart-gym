const net = require('net');
const ConnectionHandler = require('./handlers/connectionHandler');
const GymManager = require('./gym/gym');

class SmartGymServer {
  constructor(port) {
    this.port = port;
    this.gymManager = new GymManager();
  }

  start() {
    const server = net.createServer((socket) => {
      console.log('New client connected');
      const handler = new ConnectionHandler(socket, this.gymManager);
      handler.handle();
    });

    server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });

    server.on('error', (err) => {
      console.error('Server error:', err);
    });
  }
}

const server = new SmartGymServer(3000);
server.start();

module.exports = SmartGymServer;
