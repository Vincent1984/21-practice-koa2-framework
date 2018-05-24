/**
 * Provide the basic data or http client call. 
 * Resolve the exception happened here
 */
const rp = require('request-promise');

var options_accessPage = {
    method: 'GET',
    uri: 'https://github.com',
    resolveWithFullResponse: true    //This is the indicator of response is reponse or just a body
};

exports.accessPage = (() => {
  return rp(options_accessPage)
	  .then(function (response) {
	      console.log("GET succeeded with status %d", response.statusCode);
	      if(response.statusCode == 200){
	    	  return response.body;
	      }else if(response.statusCode == 404){
	    	  ctx.throw(404, 'No Page Data found'); 
	      }
	  })
	  .catch(function (err) {
		  ctx.throw(500, err); 
	  });
});



