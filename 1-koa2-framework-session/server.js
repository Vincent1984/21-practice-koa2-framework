/**
 * NOTICE: The sequence is very important  
 * The session, passport, authcheck point are very meaningful
 */
const Koa = require('koa')
const app = new Koa()

const bodyParser = require('./middlewares/bodyParser');
const logger = require('./middlewares/logger');
const errors = require('./middlewares/errors');
const passport = require('./middlewares/passport');
const cors = require('./middlewares/cors');
const session = require('./middlewares/session');
const passportSession = require('./middlewares/passport.session');

const docs = require('./middlewares/docs');
const cluster = require('./middlewares/cluster');

const passportLocal = require('./settings/app.passport.local');
const passportSerialize = require('./settings/app.passport.serialize');
const checkpointLocal = require('./settings/app.auth.checkpoint.local');

const statelessRouter = require('./settings/app.routers.stateless');
const statefulRouter = require('./settings/app.routers.stateful');


//basic init
cors.init(app);
logger.init(app);
errors.init(app);
bodyParser.init(app);

/*---------------------------------------------------------------------- */
/* Passport in session, don't forget to switch the checkpoint to local   */
/*---------------------------------------------------------------------- */
session.init(app);
passport.init(app);
passportSession.init(app);
passportLocal.init();
passportSerialize.init();



//router
statelessRouter.init(app);
checkpointLocal.init(app);
statefulRouter.init(app);

docs.init(app);
cluster.init(app);
