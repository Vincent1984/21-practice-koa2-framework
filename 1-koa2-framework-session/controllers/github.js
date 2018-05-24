/**
 * 
 */
const gitHubService = require('../services/gitHubService');

//GET /github
exports.getGitHub = async (ctx, next) => {
  let page = await gitHubService.fetchPage();
  ctx.body = { success: true, data: page };
}