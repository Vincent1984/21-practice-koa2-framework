# 21-practice-koa2-framework

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
The sequence in the program is very important for koa framework

## Important tips
1. Passport --> is a kind of data structure for exmple ctx.state which stores the user information
2. Passport Stratagy --> when login, check the authentication and compose passport
3. passport serilize --> to put user passport into session (only work when we have session, JWT don't need it)
4. passport deserialize --> to get user passport from session (only work when we have session, JWT don't need it)
5. Where does JWT deserialize the JWT to user? in Passport JWT strategy 
6. check authentication --> with session (isAuthenticated() method) / JWT (passport.authenticate() method)
