const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string()
    .pattern(/^\+?[0-9]{10,13}$/)
    .required()
});

module.exports = {
  schema
};
