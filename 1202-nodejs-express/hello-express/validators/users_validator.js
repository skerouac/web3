const { param, body } = require("express-validator");

const UsersValidator = {
  idValidator: [param("id").isInt().withMessage("Id has to be a number.")],
  createValidator: [
    body("firstName")
      .isString()
      .withMessage("First name is not valid")
      .notEmpty()
      .withMessage("First name is mandatory")
      .trim()
      .escape(),
    body("lastName")
      .isString()
      .withMessage("Last name is not valid")
      .notEmpty()
      .withMessage("Last name is mandatory")
      .trim()
      .escape(),
    body("email").isEmail().withMessage("Not a valid email address"),
    body("password")
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
      .withMessage(
        "Password needs a minimum of 8 characters, 1 number, 1 symbol and 1 uppercase character"
      )
      .escape(),
    body("isVerified").isBoolean().withMessage("Has to be true or false"),
  ],
  updateValidator: [
    body("firstName")
      .optional()
      .isString()
      .withMessage("First name is not valid")
      .notEmpty()
      .withMessage("First name is mandatory")
      .trim()
      .escape(),
    body("lastName")
      .optional()
      .isString()
      .withMessage("Last name is not valid")
      .notEmpty()
      .withMessage("Last name is mandatory")
      .trim()
      .escape(),
    body("email").optional().isEmail().withMessage("Not a valid email address"),
    body("password")
      .optional()
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
      .withMessage(
        "Password needs a minimum of 8 characters, 1 number, 1 symbol and 1 uppercase character"
      )
      .escape(),
    body("isVerified")
      .optional()
      .isBoolean()
      .withMessage("Has to be true or false"),
  ],
};

module.exports = UsersValidator;
