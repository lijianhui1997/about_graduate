var express = require('express');
var router = express.Router();
const db = require('../model/database');
/* GET home page. */
router.get('/', function(req, res) {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"')
      const sql = 'select * from novel';
	db.query(sql,(err,result)=>{
  			res.send(result);
		});
});

module.exports = router;
