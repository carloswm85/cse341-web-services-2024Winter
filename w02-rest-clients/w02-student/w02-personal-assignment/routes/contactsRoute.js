const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

// GET
router.get('/lista', contactsController.getData);
router.get('/:id', contactsController.getItem);

// localhost:8080/contactos/
module.exports = router;