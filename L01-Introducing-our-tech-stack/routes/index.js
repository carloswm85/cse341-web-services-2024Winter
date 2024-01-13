const routes = require('express').Router();
const controller = require("../controllers/lessonOneController");

routes.get("/", (req, res) => {
	res.send("Carlos Mercado");
});

routes.get("/2", (req, res) => {
	res.send("Carlos Novoa");
});

routes.get("/3", controller.routeOne);

routes.get("/4", controller.routeTwo);

module.exports = routes;