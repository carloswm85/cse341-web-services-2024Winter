const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

// GET
router.get('/lista', contactsController.getData);
router.get('/get/:id', contactsController.getItem);

// POST
router.post('/contact', contactsController.postItem);

// PUT
router.put("/contact", contactsController.postItem);

// DELETE
router.delete('/del/:id', contactsController.deleteItem);

// localhost:8080/contactos/
module.exports = router;