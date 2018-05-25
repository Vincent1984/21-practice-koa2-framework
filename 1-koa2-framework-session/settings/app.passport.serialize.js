const passport = require('koa-passport');
const userService = require('../services/userService');

exports.init = () => {	
	//This is used to put the user info into session
	//The user is gotten after passportlogin
	passport.serializeUser(function(user, done) {
        console.log("666 serializeUser")
	  done(null, user);
	})
	
	//This is used  to get user details based on the id decrypt from session.
	passport.deserializeUser(async function(id, done) {
	  try {
          console.log("666 deserializeUser")
	    const user = await userService.fetchUserById(id);
	    done(null, user);
	  } catch(err) {
	    done(err);
	  }
	})
}