/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

const postrouters = require('koa-router')();

const auth = require('../controllers/auth');
const user = require('../controllers/user');
const validate = require('koa2-validation');
const passport = require('koa-passport');

exports.init = app => {

	postrouters.get('/logout', auth.logout);

	postrouters.get('/users', user.getUserList);
	postrouters.get('/user/:id', validate(user.v.getUserById), user.getUserById);
	app.use(postrouters.routes());

}