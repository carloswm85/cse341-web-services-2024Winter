const { json } = require('stream/consumers');

const routes = require('express').Router();

const professionalData = require("./user.json");
	
routes.get("/professional", (req, res, next) => {
	res.json(professionalData);
});

module.exports = routes;