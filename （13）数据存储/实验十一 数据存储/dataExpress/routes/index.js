var express = require('express');
var router = express.Router();
var chapterList = [];
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

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
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from chapters",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("list",{chapterList:result});
      }
    });
  }
  else{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    res.end("用户名、密码错误");
  }
});

router.get('/addChapter', function(req, res, next) {
  res.render('addchapter', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("list",{chapterList:result});
    }
  });
});

router.post('/addChapter',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.end("insert success");
    }
  });
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("list",{chapterList:result});
    }
  });
})

module.exports = router;
