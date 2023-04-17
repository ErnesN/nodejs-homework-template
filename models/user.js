const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true
    },
    password: {
      type: String,
      minlenght: 8,
      required: true
    }
  },
  { versionKey: false, timestamps: true }
);
