# koa-passport-jwt-framework

This is the workable version for koa2. This framework is ready for production.

It includes nearly every feature:
*** please check package.json for all the techniques I used.

* authenticate: JWT in header, with passport supported
* session:      basd on requirements. 1-with session, 2-no session.
* cors: cors
* error handler: throw error at any time and handle it together
* error logger: log any error stacks
* logger format: log everything in json format
* logger: use unified logger
* API calls: user HTTP.request to call third party APIs
* docs: support API docs
* promise: promise everything with async/await
* standard mvc model: router, controller, service, repository
* middleware： every support middleware can be easily added.
* ORM: TODO --> add standard ORM later
* frontend: static page supported

## Example
npm start
http://localhost:3000

## Notice
Please refer to the previous project for API calls
