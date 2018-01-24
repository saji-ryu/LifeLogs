var socket = io();
console.log('ok');
socket.on("test", function(data){
  console.log(data);
  $('#streamtest').append('<li>'+data+'</li>');
});

setInterval(function() {
  socket.emit('want','')
},1000);
