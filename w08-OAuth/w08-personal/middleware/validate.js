const { body, validationResult } = require('express-validator');

// Validation docs: https://www.npmjs.com/package/express-validator and https://express-validator.github.io/docs
// A validation chain has three kinds of methods: validators, sanitizers and modifiers. - https://express-validator.github.io/docs/guides/validation-chain#features

/** USER */
// TODO Login - https://stackoverflow.com/questions/62630504/express-validator-isdate-and-isiso8601-are-always-false
const userValidationRules = () => {
  return [body('username').isEmail(), body('password').isLength({ min: 5 })];
};

/** AUTHOR */
const authorValidationRules = () => {
  return [
    body('author_name').isLength({ min: 6 }).withMessage('Length must be at least 6 characters.'),
    body('author_email').isEmail().withMessage('The field must be an email type.'),
    body('author_image').isLength({ min: 6 }).withMessage('Length must be at least 6 characters.')
  ];
};

/** POST */
const postValidationRules = () => {
  return [
    body('title')
      .notEmpty()
      .isLength({ min: 20, max: 50 })
      .withMessage('Length must be between 20 and 30 characters.'),
    body('subtitle')
      .notEmpty()
      .isLength({ min: 30, max: 60 })
      .withMessage('Length must be between 30 and 50 characters.'),
    body('content')
      .notEmpty()
      .isLength({ min: 200, max: 1500 })
      .withMessage('Length must be between 200 and 1500 and characters.'),
    body('cover')
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('Length must be at least 6 characters.'),
    body('author_name')
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage('Length must be at least 3 characters.'),
    body('tag_name')
      .trim()
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage('Length must be at least 3 characters.'),
    body('published_on')
      .notEmpty()
      // .isDate()
      .withMessage('Date is required.')
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
  postValidationRules,
  validate
};
