const express = require('express');
const posts = express.Router();

const postsController = require('../controllers/posts');

const { postValidationRules, validate } = require('../middleware/validate');

/** POSTS */
// List
posts.get('/posts/', postsController.getData);
// Item
posts.get('/posts/:id', postsController.getItem);
// Post
posts.post('/posts/', postValidationRules(), validate, postsController.postItem);
// Put
posts.put('/posts/:_id', postValidationRules(), validate, postsController.putItem);
// Delete
posts.delete('/posts/:_id', postsController.deleteItem);

module.exports = posts;
