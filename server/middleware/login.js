const joi = require("joi");

exports.isValidLogin = (data) => {
  const schema = joi.object().keys({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
    mobileNumber: joi.string().required().label("Mobile Number"),
  });

  return schema.validate(data);
};
