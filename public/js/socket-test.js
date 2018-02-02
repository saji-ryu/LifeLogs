var socket = io();
console.log('ok');
socket.on("stream", function(data){
  delete data.istaken;
  console.log(data);
  $('<li>'+JSON.stringify(data)+'</li>').prependTo('#streamtest').hide().fadeIn(800);
});
