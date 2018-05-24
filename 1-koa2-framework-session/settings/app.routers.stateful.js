/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

const postrouters = require('koa-router')();
const passport = require('koa-passport');

const auth = require('../controllers/auth');
const user = require('../controllers/user');
const validate = require('koa2-validation'); 
const gitHub = require('../controllers/github');

exports.init = app => {


	postrouters.get('/logout', auth.logout);
	postrouters.get('/app', auth.application);
	
	postrouters.get('/users', user.getUserList);
	postrouters.get('/user/:id', validate(user.v.getUserById), user.getUserById);
	postrouters.get('/e503', user.e503);
	postrouters.get('/github', gitHub.getGitHub);
	app.use(postrouters.routes());

}