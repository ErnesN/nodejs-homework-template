const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Email is required!"]
    },
    password: {
      type: String,
      minlenght: 8,
      required: [true, "Set password for user"]
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: { type: String, default: "" },
    avatarURL: { type: String, required: true },
    verify: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"]
    }
  },
  { versionKey: false, timestamps: false }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required()
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required()
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required()
});

const schemas = {
  registerSchema,
  loginSchema,
  emailSchema
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas
};
