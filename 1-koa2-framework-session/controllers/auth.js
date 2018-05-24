const passport = require('koa-passport');
const fs = require('fs')

//GET /
exports.entry = async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('views/login.html')
};

//POST /login 
/* --------------------------------------------------------------------- */
/* Local Auth, by defaut will create a session                           */
/* Notice this is entrance, it will call passport authenticate first     */
/* --------------------------------------------------------------------- */
exports.login = passport.authenticate('local', {
    successRedirect: '/app',
    failureRedirect: '/'
});


//GET /logout
exports.logout = async (ctx, next) => {
  ctx.logout();
  ctx.redirect('/');
};

//GET /app
exports.application = async (ctx, next)  => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream('views/app.html');
};