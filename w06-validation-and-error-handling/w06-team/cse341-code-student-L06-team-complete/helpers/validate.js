// Import the Validator class from the validatorjs library
const Validator = require('validatorjs');

// Define a function named 'validator' with parameters: body, rules, customMessages, and callback
const validator = (body, rules, customMessages, callback) => {
  // Create a new instance of the Validator class with the provided body, rules, and customMessages
  const validation = new Validator(body, rules, customMessages);

  // Perform validation and execute the callback function based on the validation result
  validation.passes(() => callback(null, true)); // If validation passes, invoke the callback with no error and true
  validation.fails(() => callback(validation.errors, false)); // If validation fails, invoke the callback with validation errors and false
};

// Export the 'validator' function to make it available for use in other modules
module.exports = validator;
