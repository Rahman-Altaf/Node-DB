const Joi = require("joi");
const express = require("express");
const createUserSchema = async (req, res, next) => {
  const createUser = Joi.object({
    username: Joi.string().min(3).max(34).required(),
    password: Joi.string().min(6).max(34).required(),
  });
  //
  try {
    await createUser.validateAsync(req.body);
    next();
  } catch (error) {
    return res.send(error);
  }
};
module.exports = {
  createUserSchema,
};
