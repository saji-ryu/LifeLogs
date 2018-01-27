var socket = io();
console.log('ok');
socket.on("test", function(data){
  console.log(data);
  $('#streamtest').append('<li>'+JSON.stringify(data)+'</li>');
});

// setInterval(function() {
//   socket.emit('want','')
// },1000);
