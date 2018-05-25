/**
 * please refer to https://github.com/koajs/static
 */

const path = require('path')

const session = require('koa-session')

const CONFIG =  require('../settings/app.config');

exports.init = app => {
    app.keys = [CONFIG.KEYS]
    app.use(session(CONFIG.SESSION_CONFIG, app))
};


