var express = require('express');
var router = express.Router();
var chapterList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.pwd;
  if(username == "admin" && password == "admin"){
    res.render('list', { chapterList: chapterList });
  }
  else{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    res.end("用户名密码错误");
  }
});

router.get('/addChapter', function(req, res, next) {
  res.render('addchapter', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { chapterList: chapterList });
});

router.post('/addChapter',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  var chapter = {};
  chapter.id = chapterList.length + 1;
  chapter.title = title;
  chapter.content = content; 
  chapter.views = 10;
  chapter.control = 109;
  chapterList.push(chapter);
  console.log(chapterList);
  res.render('list',{ chapterList: chapterList });
})

module.exports = router;
