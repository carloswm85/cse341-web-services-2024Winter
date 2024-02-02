const express = require('express');

const contactsController = require('../controllers/contacts');

const routes = express.Router();

// GET all, GET by id, POST, PUT and DELETE

// GET LIST
routes.get('/contacts/list', contactsController.getData);

// GET ITEM
routes.get('/contacts/retrieve/:id', contactsController.getItem);

// POST
routes.post('/contacts/create', contactsController.postItem);

// PUT
routes.put("/contacts/update/:id", contactsController.putItem);

// DELETE
routes.delete('/contacts/delete/:id', contactsController.deleteItem);

// localhost:8080/contactos/
module.exports = routes;