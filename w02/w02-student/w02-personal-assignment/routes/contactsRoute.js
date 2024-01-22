const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

// GET
router.get('/lista', contactsController.getData);

// localhost:8080/contactos/
module.exports = router;