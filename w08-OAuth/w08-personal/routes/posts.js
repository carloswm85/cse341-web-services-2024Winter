const express = require('express');
const posts = express.Router();

const postsController = require('../controllers/posts');

const { postValidationRules, validate } = require('../middleware/validate');

/** POSTS */
// List
posts.get('/', postsController.getData);
// Item
posts.get('/:id', postsController.getItem);
// Post
posts.post('/', postValidationRules(), validate, postsController.postItem);
// Put
posts.put('/:id', postValidationRules(), validate, postsController.putItem);
// Delete
posts.delete('/:id', postsController.deleteItem);

module.exports = posts;
