const express = require("express");

const authorsController = require("../controllers/authors");

const routes = express.Router();

// GET all, GET by id, POST, PUT and DELETE

// GET LIST
routes.get("/authors/", authorsController.getData);

// GET ITEM
routes.get("/authors/:id", authorsController.getItem);

// POST
routes.post("/authors/", authorsController.postItem);

// PUT
routes.put("/authors/:_id", authorsController.putItem);

// DELETE
routes.delete("/authors/:_id", authorsController.deleteItem);

// localhost:8080/contactos/
module.exports = routes;
