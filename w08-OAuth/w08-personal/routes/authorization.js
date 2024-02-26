const express = require("express");
const routes = express.Router();

const authorizationController = require("../controllers/authorization");

// AUTHORIZE MAIN PAGE
routes.get("/", authorizationController.authorize);

// GITHUB AUTHORIZE
routes.get("/github-authorize/", authorizationController.authorizeGithub);

// GITHUB CALLBACK
routes.get(
	"/github-oauth-callback/",
	authorizationController.callbackGithub
);

// GITHUB AUTHORIZE
routes.get("/github-logout/", authorizationController.logoutGithub);


module.exports = routes;