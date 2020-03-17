var express = require('express');
var router = express.Router();
const db = require('../model/database');



router.post('/content', function(req, res) {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
      var novel_id=req.body.index;
      const sql = 'select * from (pinglun,novel,user) where novel.novel_id=pinglun.novel_id and pinglun.user_id=user.user_id and novel.novel_id=? ';
        db.query(sql,[novel_id],(err,result)=>{
                        if(err){ console.log(err);   }
			console.log(result);
			res.send(result);
                });
});

router.post('/write',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain; charset="utf-8"');
	var user_id=req.body.user_id;
	var novel_id=req.body.novel_id;
        var pinglun=req.body.pinglun;
	const sql='insert into pinglun(user_id,novel_id,plcontent) values(?,?,?)';
	db.query(sql,[user_id,novel_id,pinglun],(err,result)=>{
		if(err){console.log("ERROR"+err)}
		res.send(result);
	});

})


module.exports = router;

