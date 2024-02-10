const express = require('express');

const contactsController = require('../controllers/contacts');

const routes = express.Router();

// GET all, GET by id, POST, PUT and DELETE

// GET LIST
routes.get('/contacts/', contactsController.getData);

// GET ITEM
routes.get('/contacts/:_id', contactsController.getItem);

// POST
routes.post('/contacts/', contactsController.postItem);

// PUT
routes.put("/contacts/:_id", contactsController.putItem);

// DELETE
routes.delete('/contacts/:_id', contactsController.deleteItem);

// localhost:8080/contactos/
module.exports = routes;