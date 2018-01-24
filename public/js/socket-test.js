var socket = io();

socket.on("test", function(data){
  console.log(data);
});
