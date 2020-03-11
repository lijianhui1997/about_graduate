var express = require('express');
var router = express.Router();
const db = require('../model/database');
//注册页面
router.get('/',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain; charset="utf-8"');
	const sql='select * from novel';
	db.query(sql,(err,result)=>{
		res.send(result);
	//	console.log(result);
	})

});

router.post('/', function(req, res) {
	console.log('来到后台');
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
	var username=req.body.username;
        var password=req.body.password;
        var email = req.body.email;
        var tel=req.body.tel;
        console.log(username,password,email,tel);
	const sql='insert into user(username,password,tel,email) values(?,?,?,?)'; 

       if(username && password && email && tel){
  		db.query(sql,[username,password,email,tel],(err,result)=>{
    		if(err){
                console.error("Error:",err);
                          process.exit();
                                  
   		 }
            console.log(result);
	    res.send(result);              
  		});
	}
});

//更新性别信息
router.post('/update',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain; charset="utf-8"');
	var sex=req.body.sex;
	var username=req.body.username;
	const sql='update user set sex=? where username=?';
	if(sex && username){
		db.query(sql,[sex,username],(err,result)=>{
		 if(err){
                console.error("Error:",err);
                          process.exit();

                 }
            console.log(result);
            res.send(result);
	})
	}


});

module.exports = router;

