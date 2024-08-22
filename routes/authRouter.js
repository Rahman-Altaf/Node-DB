var routes = require("express").Router();
var { login, logout } = require("../Controllers/authController");

routes.get("/logout", logout);
routes.post("/login", login);


module.exports = routes;
// 
