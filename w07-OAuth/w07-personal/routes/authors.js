const express = require("express");
const routes = express.Router();

const authorsController = require("../controllers/authors");

const {
	userValidationRules,
	authorValidationRules,
	validate,
} = require("../middleware/validate");

// GET all, GET by id, POST, PUT and DELETE

// GET LIST
routes.get("/authors/", authorsController.getData);

// GET ITEM
routes.get("/authors/:id", authorsController.getItem);

// POST
routes.post(
	"/authors/",
	authorValidationRules(),
	validate,
	authorsController.postItem
);

// PUT
routes.put(
	"/authors/:_id",
	authorValidationRules(),
	validate,
	authorsController.putItem
);

// DELETE
routes.delete("/authors/:_id", authorsController.deleteItem);

// localhost:8080/contactos/
module.exports = routes;
