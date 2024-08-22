var routes = require("express").Router();
const { create, getAll } = require("../Controllers/userController");

routes.get("/get-all-user", getAll);
routes.get("/create-user", create);

module.exports = routes;
// 