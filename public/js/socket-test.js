var socket = io();
console.log('ok');
socket.on("test", function(data){
  console.log(data);
  $('#streamtest').prepend('<li>'+JSON.stringify(data)+'</li>');
});
