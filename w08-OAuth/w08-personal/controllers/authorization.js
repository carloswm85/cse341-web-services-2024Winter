const isLocalHost = false;
//
// LINKS
// OAuth 2.0 configuration - https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/
// Passport-GitHub2 - https://www.passportjs.org/packages/passport-github2/

const axios = require('axios');
const path = require('path');

const githubClientId = isLocalHost
  ? process.env.GITHUB_CLIENT_ID_LOCALHOST
  : process.env.GITHUB_CLIENT_ID;
const githubClientSecret = isLocalHost
  ? process.env.GITHUB_CLIENT_SECRET_LOCALHOST
  : process.env.GITHUB_CLIENT_SECRET;

// ENTRY PAGE
const authorize = async (req, res) => {
  // #swagger.tags = ['Authorization']

  const fullPath = path.join(__dirname, './', '../static/index.html');
  res.sendFile(fullPath);
};

// AUTHORIZE TO GITHUB
const authorizeGithub = async (req, res) => {
  // #swagger.tags = ['Authorization']

  res.redirect(`https://github.com/login/oauth/authorize?client_id=${githubClientId}`);
};

// CALLBACK FROM GITHUB
const callbackGithub = async ({ query: { code } }, res) => {
  // https://swagger-autogen.github.io/docs/endpoints/forced-endpoint-creation
  /*
    #swagger.start
    #swagger.path = '/github-oauth-callback/'
    #swagger.method = 'get'
    #swagger.description = 'Forced endpoint.'
    #swagger.tags = ['Authorization']
    #swagger.end
  */

  const body = {
    client_id: githubClientId,
    client_secret: githubClientSecret,
    code
  };

  const opts = { headers: { accept: 'application/json' } };

  try {
    axios
      .post('https://github.com/login/oauth/access_token', body, opts)
      .then((_res) => _res.data.access_token)
      .then((token) => {
        res.redirect(`/?token=${token}`);
      });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// LOGOUT
const logoutGithub = async (req, res) => {
  // #swagger.tags = ['Authorization']

  req.logout();
  res.redirect('/');
};

module.exports = { authorize, authorizeGithub, callbackGithub, logoutGithub };
