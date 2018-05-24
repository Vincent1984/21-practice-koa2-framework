/**
 * All the router after this point will check authentication
 */
/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

exports.init = app => {	

	//This part is very very important
	//All the route below this part will be authenticated checked
	//Require authentication for now
	app.use(function(ctx, next) {
	  if (ctx.isAuthenticated()) {
		  console.log("4444  - check auth success");
		  return next()
	  } else {
		  console.log("4444  - check auth failed");
		  ctx.redirect('/')
	  }
	})

	
}