var awesome = true;

var people = ['Me','Will','John'];

var activities = ['code','dota'];

//some awesome code!!

//changes to the awesome file

//more changes

//and more!!

var awesome = "Awesome!";

var awesomeArray = ["Awesome", "Awesome", "Awesome", "Awesome"];

var awesomeObject = {
  awesome: "awesome";
  awesomeQuestionMark: "awesome";
  Awwwwson: "awesome";
  awwwwDang: "THIS ISN'T MY WORLD.";

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
