var express = require('express');
var router = express.Router();
const db = require('../model/database');


//查询数据库中是否存在该用户
router.post('/', function(req, res) {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
	var username=req.body.username;
        var password=req.body.password;
        console.log(username,password);
	 const sql =  "select * from user where username = '"+ username +"'and password = '"+password+"' ";
  	db.query(sql,(err,result)=>{
    		if(err){
      		res.send('查询失败：'+err);
    	}else{
      		res.send(result);

   	 }

})


});

module.exports = router;


