const express = require('express');
const authors = express.Router();

const authorsController = require('../controllers/authors');

const { authorValidationRules, validate } = require('../middleware/validate');

/** AUTHORS */
// List
authors.get('/', authorsController.getData);
// Item
authors.get('/:id', authorsController.getItem);
// Post
authors.post('/', authorValidationRules(), validate, authorsController.postItem);
// Put
authors.put('/:id', authorValidationRules(), validate, authorsController.putItem);
// Delete
authors.delete('/:id', authorsController.deleteItem);

module.exports = authors;
