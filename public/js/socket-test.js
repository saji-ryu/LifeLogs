var socket = io();
console.log('ok');
socket.on("test", function(data){
  delete data.istaken;
  console.log(data);
  $('#streamtest').prepend('<li>'+JSON.stringify(data)+'</li>');
});
