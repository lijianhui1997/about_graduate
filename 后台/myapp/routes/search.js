var express = require('express');
var router = express.Router();
const db = require('../model/database');
/* GET home page. */
router.get('/', function(req, res) {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
      const sql = 'select * from novel';
	db.query(sql,(err,result)=>{
  			res.send(result);
		});
});
router.post('/record',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain;charset="utf-8"');
        var user_id=req.body.user_id;
        const sql='select * from (search,novel) where search.book=novel.name and user_id=?';
        db.query(sql,[user_id],(err,result)=>{
                        if(err){
                        console.log(err);
                        process.exit();
                        }
                        res.send(result);
                })
})

router.post('/insert',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Content-Type','text/plain;charset="utf-8"');
	var user_id=req.body.user_id;
	var book=req.body.book;
	const sql='insert into search(user_id,book) values(?,?)';
	db.query(sql,[user_id,book],(err,result)=>{
			if(err){
			console.log(err);
			process.exit();
			}
			res.send(result);
		})	
});
module.exports = router;
