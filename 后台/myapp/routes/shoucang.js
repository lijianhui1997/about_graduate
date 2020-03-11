var express = require('express');
var router = express.Router();
const db = require('../model/database');
/* GET home page. */

router.post('/insert', function(req, res) {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
      var username=req.body.username;
      var juzi_id=req.body.juzi_id;
      var ifsc=req.body.flag;
      console.log(ifsc);
      	const sql = 'insert into shoucang(username,juzi_id) values(?,?) ';
        db.query(sql,[username,juzi_id],(err,result)=>{
                        if(err){ console.log(err);   }
                        res.send(result);
             });
	
});

router.post('/delete',function(req,res){
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
      var username=req.body.username;
      var juzi_id=req.body.juzi_id;
      var ifsc=req.body.flag;
      console.log(ifsc);
       const sql = 'delete from shoucang where username=? and juzi_id=?';
                db.query(sql,[username,juzi_id],(err,result)=>{
                if(err){ console.log(err); }
                res.send(result);
        });
});


router.post('/content', function(req, res) {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
      var username=req.body.username;
      console.log(username);
      const sql = 'select * from (shoucang,juzi) where shoucang.juzi_id=juzi.juzi_id and username=? ';
        db.query(sql,[username],(err,result)=>{
                        if(err){ console.log(err);   }
			console.log(result);
			res.send(result);
                });
});

module.exports = router;

