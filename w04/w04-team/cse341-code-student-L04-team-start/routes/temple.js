const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// TEACHER
routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

// ASSIGNMENT
routes.put('/:temple_id', temples.update);

routes.delete('/:temple_id', temples.delete);

module.exports = routes;
