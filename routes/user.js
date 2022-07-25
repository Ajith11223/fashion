const { Router } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/user-index',{layout:'user-layouts'})
});

 // sign up page
router.get('/signup',function (req,res) {
  res.render('user/user-signup',{user:true,layout:'user-layouts'})  
});
//login page rendering 
router.get('/login',(req,res)=> {
  res.render('user/user-login',{user:true,layout:'user-layouts'})
})

module.exports = router;
