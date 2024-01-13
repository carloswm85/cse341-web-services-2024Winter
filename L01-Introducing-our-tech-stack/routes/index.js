const routes = require("express").Router();
const controller = require("../controllers/lessonOneController");

routes.get("/", (req, res, next) => {
	res.json("Carlos Mercado");
});

routes.get("/2", (req, res, next) => {
	res.send("Carlos Novoa 02");
});

routes.get("/3", controller.routeOne);

routes.get("/4", controller.routeTwo);

module.exports = routes;
