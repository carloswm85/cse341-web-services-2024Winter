const express = require('express');
const routes = express.Router();
var passport = require('passport');

const authorizationController = require('../controllers/authorization');

// AUTHORIZE MAIN PAGE
routes.get('/', authorizationController.authorize);

// GITHUB AUTHORIZE
routes.get('/github-authorize/', authorizationController.authorizeGithub);

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.
routes.get(
  '/github-oauth-callback/',
  passport.authenticate('github', { failureRedirect: '/' }),
  authorizationController.callbackGithub
);

// GITHUB AUTHORIZE
routes.get('/github-logout/', authorizationController.logoutGithub);

module.exports = routes;
