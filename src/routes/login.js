const { Router } = require('express');
const router = Router()

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassprtLocal = require('passport').Strategy;





router.use(cookieParser('unicoReptiles'));
router.use(session({
  secret: 'unicoReptiles',
  resave: true,
  saveUninitialized: true,
}));
router.use(passport.initialize());
router.use(passport.session());
passport.use(new PassprtLocal(function(
  username, password, done) {
  if(username === 'UnicoReptiles' && password === 'UnicoReptiles123')
    return done(null,{id: 1, name: 'Leo'});
  done(null, false);
}));
passport.serializeUser(function(user, done){
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  done(null, {id: 1, name: 'Leo'})
});


router.get('/login', (req, res) => {
  res.render('login')
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/admin',
  failureRedirect: '/login',
}));







//INDEX-PAGINA-PRINCIPAL
router.get('/login', (req, res) => {
  res.render('login')
});

router.post('/login', passport.authenticate({
  successRedirect: '/admin',
  failureRedirect: '/login',
}));


module.exports = router;