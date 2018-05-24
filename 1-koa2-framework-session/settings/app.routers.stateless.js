/**
 * Add all routers here
 * NOTICE: The sequence is very important, especially after ctx.isAuthenticated(),  
 * after that part, all the API need to be authenticated
 */

const prerouters = require('koa-router')();
const auth = require('../controllers/auth');

exports.init = app => {
    prerouters.get('/', auth.entry);
	prerouters.post('/login', auth.login);
	app.use(prerouters.routes());


}