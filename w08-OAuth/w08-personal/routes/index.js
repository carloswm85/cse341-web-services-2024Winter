const router = require('express').Router();
const authors = require('./authors');
const authorize = require('./authorization');
let docData;

router.use('/authors', authors);
router.use('/', authorize);
router.use('/', require('./swagger'));
router.use(
  '/',
  (docData = (req, res) => {
    docData = {
      documentationURL: 'https://cse341.netlify.app/lesson6'
    };
    res.send(docData);
  })
);

module.exports = router;
