/**
 * All the router after this point will check authentication
 */
/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

const passport = require('koa-passport');

//please refer to https://github.com/slava-lu/koa-jwt-auth/blob/master/index.js
exports.init = app => {	
	//This part is very very important
	//All the route below this part will be authenticated checked
	//Require authentication for now
	app.use(function(ctx, next) {
	  if (passport.authenticate('jwt', { session: false })) {
		  return next();
	  } else {
		  ctx.redirect('/');
	  }
	})
}