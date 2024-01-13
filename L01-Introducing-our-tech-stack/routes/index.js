const routes = require("express").Router();
const baseController = require("../controllers/lessonOneController");

routes.get("/", (req, res, next) => {
	res.json("Carlos Mercado");
});

routes.get("/2", (req, res, next) => {
	res.send("Carlos Novoa 02");
});

routes.get("/3", baseController.routeOne);

routes.get("/4", baseController.routeTwo);

module.exports = routes;
