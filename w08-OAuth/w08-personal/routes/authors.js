const express = require('express');
const authors = express.Router();

const authorsController = require('../controllers/authors');

const { authorValidationRules, validate } = require('../middleware/validate');

/** AUTHORS */
// List
authors.get('/authors/', authorsController.getData);
// Item
authors.get('/authors/:id', authorsController.getItem);
// Post
authors.post('/authors/', authorValidationRules(), validate, authorsController.postItem);
// Put
authors.put('/authors/:_id', authorValidationRules(), validate, authorsController.putItem);
// Delete
authors.delete('/authors/:_id', authorsController.deleteItem);

module.exports = authors;
