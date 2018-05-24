const session = require('koa-session');

exports.init = app => {
	app.keys = ['some secret hurr'];

	
	const OPTIONS = {
	  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
      /** store: new Store()  //whether to use a store */
	  /** please refer to https://github.com/Secbone/koa-session2 for the store details */
	  /** (number || 'session') maxAge in ms (default is 1 days) */
	  /** 'session' will result in a cookie that expires when session/browser is closed */
	  /** Warning: If a session cookie is stolen, this cookie will never expire */
	  maxAge: 86400000,
	  overwrite: true, /** (boolean) can overwrite or not (default true) */
	  httpOnly: true, /** (boolean) httpOnly or not (default true) */
	  signed: true, /** (boolean) signed or not (default true) */
	  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
	  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
	};

	app.use(session(OPTIONS, app));
};
