/**
 * github service domain.
 * It will call the real opertions for example DB or LDAP or HTTP in Repository.
 */

const gitHubRepo = require('../repository/gitHubRepo');

exports.fetchPage = (() => {
  return async function() {
	  //resove the business here
	let data = await gitHubRepo.accessPage();
    return data;
  }
})();