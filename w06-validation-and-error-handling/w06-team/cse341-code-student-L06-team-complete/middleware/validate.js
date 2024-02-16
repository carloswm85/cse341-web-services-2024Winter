const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
  
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
    favoriteColor: 'required|string',
    birthday: 'string'
  };

  const ducks = (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next(); // success: true
    }
  };

  validator(req.body, validationRule, {}, ducks);
};

module.exports = {
  saveContact
};
