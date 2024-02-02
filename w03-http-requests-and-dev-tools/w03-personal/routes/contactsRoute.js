const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

// GET LIST
router.get('/contacts/list', contactsController.getData);

// GET ITEM
router.get('/contacts/retrieve/:id', contactsController.getItem);

// POST
router.post('/contacts/create', contactsController.postItem);

// PUT
router.put("/contacts/update/:id", contactsController.putItem);

// DELETE
router.delete('/contacts/delete/:id', contactsController.deleteItem);

// localhost:8080/contactos/
module.exports = router;