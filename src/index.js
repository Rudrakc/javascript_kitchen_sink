const WebSocket = require('ws');

// Create a new WebSocket server listening on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Store connected players
let players = [];

wss.on('connection', (ws) => {
  // Add the player to the list (up to 2 players)
  if (players.length < 2) {
    players.push(ws);
    ws.send(JSON.stringify({ message: 'connected', color: players.length === 1 ? 'white' : 'black' }));
  } else {
    ws.send(JSON.stringify({ message: 'game_full' }));
    ws.close();
  }

  // Handle incoming messages (moves)
  ws.on('message', (message) => {
    // Broadcast the move to the other player
    players.forEach(player => {
      if (player !== ws && player.readyState === WebSocket.OPEN) {
        player.send(message);
      }
    });
  });

  // Handle disconnection
  ws.on('close', () => {
    players = players.filter(player => player !== ws);
  });
});

console.log('WebSocket server running on ws://localhost:8080');
