var express = require('express');
var router = express.Router();
var data = require("../data.json");
var users = data.users;
var chapterList = data.chapterList;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/',function(req,res,next){
  var username = req.body.username;
  var password = req.body.pwd;
  if(username == users[0].username && password == users[0].password){
    res.render("list",{ chapterList: chapterList });
  }
  else{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    res.end("用户名密码错误");
  }
  
});

module.exports = router;
