const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const index = require('./routes/index');

const app = express();

app.set('views', __dirname + '/views'); //テンプレート・ファイルが配置されるディレクトリー
app.set('view engine', 'pug'); //使用するテンプレート・エンジン

//middlewereという リクエストが来た時に適用する処理を書いたもの 書く順に実行
app.use(logger('dev')); //アクセスログをとる
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public')); //静的なファイルはpublic内の一致する名前のものを配信

app.use('/', index);
//app.use('/',);



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

module.exports = app;


//
//
//
//
//
// //---------以前のコード-------------------
// //自分でmiddlewareを作る場合
// app.use(function(req, res, next) {
//   console.log('my custom middleware!');
//   next(); //middlewareを重ねる仕組み忘れない
// });
//
//
// app.get('/', function(req, res) {
//   res.render('index',{title: 'タイトル'});//.ejsは省略できる　オブジジェクトを渡すこともできるよ
// });
//
// app.param('id',function (req,res,next,id) {
//   let peoples = ['ryusei','suzuki','sato'];
//   req.params.name = peoples[id];
//   next();
// })
//
//
//
// app.get('/users/:name?', function(req, res) { //プレースホルダー :以降をnameとして使える
//   res.send('hello'+ req.params.name);
// });
//
//
// app.get('/data/',function (req,res) {
//   console.log(req.query.day); // for logging
//   res.send('get data');
// })
//
// app.get('/items/:id([0-9]+)?', function(req, res) { //正規表現で制限も可能 ?つけるとそもそもあるかどうかわかる
//   if (req.params.id) { //存在しているか確かめる
//     res.send('number ' + req.params.id);
//   } else {
//     res.send('no such a item');
//   }
// });
//
// app.get('/hello/:id',function (req,res) {
//   res.send('hello!'+req.params.name);
// })
//
// app.get('/hello.txt', function(req, res) { //ファイルの表示
//   res.sendfile(__dirname + '/public/hello.txt'); //__dirnameで今のディレクトリが取れる
// });
//
// app.listen(3000);
// console.log('server starting...');
