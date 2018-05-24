const jwt = require('koa-jwt');
const CONFIG = require('../settings/app.config');

exports.init = app => {
	// Middleware below this line is only reached if JWT token is valid
	app.use(jwt({ secret: CONFIG.JWT.secret, passthrough: true}));
};
