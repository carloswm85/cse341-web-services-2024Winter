const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
  return [body('username').isEmail(), body('password').isLength({ min: 5 })];
};

const authorValidationRules = () => {
  return [
    body('author_name').isLength({ min: 6 }).withMessage('Length must be at least 6 characters.'),
    body('author_email').isEmail().withMessage('The field must be an email type.'),
    body('author_image').isLength({ min: 6 }).withMessage('Length must be at least 6 characters.')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  authorValidationRules,
  validate
};
