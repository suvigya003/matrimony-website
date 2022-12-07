const joi = require("joi");
const db = require("../models");

exports.isValidRegistration = (data) => {
  const schema = joi.object().keys({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
    mobileNumber: joi.string().required().label("Mobile Number"),
  });

  return schema.validate(data);
};
