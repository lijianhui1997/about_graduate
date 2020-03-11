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
//青春读物页面
router.post('/qingchun',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Content-Type','text/plain;charset="utf-8"');
	var type=req.body.type;
	const sql='select * from novel where type=?';
	db.query(sql,[type],(err,result)=>{
			if(err){
			console.log(err);
			process.exit();
			}
			res.send(result);
		})	
});
//前台请求数据，实现搜索关键字查找出书籍类型
router.post('/type',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain;charset="utf-8"');
        var type=req.body.type;
        const sql='select * from novel where type=?';
        db.query(sql,[type],(err,result)=>{
                        if(err){
                        console.log(err);
                        process.exit();
                        }
                        res.send(result);
                })
})
//前台发送下标，后台完成任务
router.post('/index',function(req,res){
        res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain;charset="utf-8"');
        var index=req.body.index;
        const sql='select * from novel where novel_id=?';
        db.query(sql,[index],(err,result)=>{
                        if(err){
                        console.log(err);
                        process.exit();
                        }
                        res.send(result);
                })
})


module.exports = router;

