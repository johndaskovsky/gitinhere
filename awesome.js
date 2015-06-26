var awesome = true;

var people = ['Me','Will', 'John', 'Brendan', 'Faraji', 'Illy'];

var activities = ['code','dota', 'git', 'walk'];

//some awesome code!!

//changes to the awesome file

//more changes

//and more!!

var awesome = "Awesome!";

var awesomeArray = ["Awesome", "Awesome", "Awesome", "Awesome"];

var awesomeObject = {
  awesome: "awesome";
  Awwwwson: "awesome";

}



var net = require('net');

var sockets = [];

var server = net.Server(function(socket){
  sockets.push(socket);
  socket.on('data', function(d) { 
   for (var i = 0; i < sockets.length; i++) {
      if (sockets[i] === socket) continue;
      sockets[i].write(d);
    }
  });

  socket.on('end', function() {
    var i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });

});

server.listen(8000);

var o = "water"; // water
var M = "land"; // land

var board = [ 
  [o,o,o,o,M,o,o,o,o,o],
  [o,o,o,M,M,o,o,o,o,o],
  [o,o,o,o,M,o,o,M,M,o],
  [o,o,M,o,M,o,o,o,M,o],
  [o,o,o,o,M,M,o,o,o,o],
  [o,o,o,M,M,M,M,o,o,o],
  [M,M,M,M,M,M,M,M,M,M],
  [o,o,M,M,o,M,M,M,o,o],
  [o,o,o,o,o,M,M,o,o,o],
  [M,o,o,o,M,M,o,o,o,o]
];

function continentCounter (board, x, y) {
  // we fell off the board
  // or we fell into water
  if ( board[x] === undefined || board[x][y] !== "land") {
    return 0;
  }

  var count = 1;
  board[x][y] = true;

  count += continentCounter(board, x-1, y-1);
  count += continentCounter(board, x-1, y);
  count += continentCounter(board, x-1, y+1);

  count += continentCounter(board, x, y-1);
  count += continentCounter(board, x, y+1);

  count += continentCounter(board, x+1, y-1);
  count += continentCounter(board, x+1, y);
  count += continentCounter(board, x+1, y+1);

  return count;
}

continentCounter(board,  0, 4); // 31
