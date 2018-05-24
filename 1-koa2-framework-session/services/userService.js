/**
 * user service domain.
 * It will call the real user opertions for example DB or LDAP.
 */

//simluate get user from DB
exports.fetchUserByName = ((username) => {
  return async function(username) {
	  let user = { };
	  if(username == 'test') {
		   user = { id: 1, username: 'test', password: 'test' };
	  }
    return user;
  }
})();

exports.fetchUserById = ((id) => {
	  return async function(id) {
		  let user = { };
		  if(id == 1) {
			   user = { id: 1, username: 'test', password: 'test' };
		  }
	    return user;
	  }
})();




exports.fetchUserList = (() => {
	  return async function() {
		  const users = [{
			  id: '2',
			  username: 'brotherhui@163.com',
			  password: '123456',
			  age: 38
			}, {
			  id: '3',
			  username: '17229775@qq.com',
			  password: '123456',
			  age: 38
			}];
	    return users;
	  }
})();
