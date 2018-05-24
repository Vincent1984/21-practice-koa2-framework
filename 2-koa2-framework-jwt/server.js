/**
 * NOTICE: The sequence is very important  
 * The session, passport, authcheck point are very meaningful
 */
const Koa = require('koa')
const app = new Koa()

const staticPage = require('./middlewares/static');
const bodyParser = require('./middlewares/bodyParser');
const logger = require('./middlewares/logger');
const errors = require('./middlewares/errors');
const passport = require('./middlewares/passport');
const cors = require('./middlewares/cors');

const docs = require('./middlewares/docs');
const cluster = require('./middlewares/cluster');

const passportLocal = require('./settings/app.passport.local');
const passportJwt = require('./settings/app.passport.jwt');
const passportSerialize = require('./settings/app.passport.serialize');
const checkpointJwt = require('./settings/app.auth.checkpoint.jwt');

const statelessRouter = require('./settings/app.routers.stateless');
const statefulRouter = require('./settings/app.routers.stateful');

//init static page
staticPage.init(app);

//basic init
cors.init(app);
logger.init(app);
errors.init(app);
bodyParser.init(app);


/*---------------------------------------------------------------------- */
/*Passport in JWT, don't forget to switch the checkpoint to jwt          */
/*---------------------------------------------------------------------- */
passport.init(app);
passportLocal.init();
passportJwt.init();
passportSerialize.init();


//router
statelessRouter.init(app);
checkpointJwt.init(app);
statefulRouter.init(app);

docs.init(app);
cluster.init(app);
