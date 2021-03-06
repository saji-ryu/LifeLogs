const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const index = require('./routes/index');
const show = require('./routes/show');
const post  = require('./routes/post');
const get  = require('./routes/get');
const take  = require('./routes/take');
const stream  = require('./routes/stream');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.set('views', __dirname + '/views'); //テンプレート・ファイルが配置されるディレクトリー
app.set('view engine', 'pug'); //使用するテンプレート・エンジン

//middlewereという リクエストが来た時に適用する処理を書いたもの 書く順に実行
app.use(logger('dev')); //アクセスログをとる
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public')); //静的なファイルはpublic内の一致する名前のものを配信

app.use('/', index);
app.use('/post',post);
app.use('/show',show);
app.use('/get',get);
app.use('/take',take);
app.use('/stream',stream);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




io.sockets.on('connection',function(socket){
  console.log('a user connected');
  socket.on('disconnect', function() {
    socket.disconnect();
  });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.io = io;
module.exports = app;
