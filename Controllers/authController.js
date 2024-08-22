const express = require("express");

const login = (req, res) => {
  return res.send("Welcome");
};

const logout = (req, res) => {
  return res.send("Logout");
};

module.exports = {
  login,
  logout,
};
// 
// const userModel = require("../models/userModel")
//   ;

// module.exports = {
//     login: async(req, res) => {
//     try()
// }  }