/**
 * please refer to https://github.com/koajs/static
 */

const path = require('path')

const stati = require('koa-static');
exports.init = app => {
	app.use(stati(
			  path.join( __dirname,  '../views')
			  , {index: 'login.html'}))
};