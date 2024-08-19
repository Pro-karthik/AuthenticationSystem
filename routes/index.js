var express = require('express');
var userModel = require('../models/users');
var localStrategy = require('passport-local');
var passport = require('passport');
passport.use(new localStrategy(userModel.authenticate()));
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('register',{RegisterError:req.flash('RegisterError')});
});


router.get('/loginPage',function(req,res){
  res.render('login',{error:req.flash("error")});
})

router.get('/profile',isLoggedIn,function(req,res){
  res.render('index');
});


router.post('/register', function(req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userdata, req.body.password)
    .then(function(registeredUser) {
      // Successful registration
      passport.authenticate("local")(req, res, function() {
        res.redirect('/profile');
      });
    })
    .catch(function(err) {
     
      if (err.name === 'UserExistsError') {
        req.flash('RegisterError', 'Username already exists.'); 
        return res.redirect('/'); 
      }
      req.flash('RegisterError', 'An error occurred during registration.'); 
      res.redirect('/');
    });
});



router.post('/login',passport.authenticate("local",{
  successRedirect:'/profile', 
  failureRedirect:'/loginPage',
  failureFlash:true
}),function(req,res){});


router.get('/logout',function(req,res,next){
   req.logout(function(err){
    if(err) return next(err);
    res.redirect('/');
   });
});
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}


module.exports = router;
