const UserModel = require('../models/userModel');
const DealershipModel = require('../models/dealershipModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');

exports.userLogin = (req, res, next) => {
  // User login logic
};

exports.dealershipLogin = (req, res, next) => {
  // Dealership login logic
};

exports.adminLogin = (req, res, next) => {
  // Admin login logic
};

exports.logout = (req, res, next) => {
  // Logout logic
};

exports.changePassword = (req, res, next) => {
  // Change password logic
};

exports.verifyToken = (req, res, next) => {
  // Verify token logic
};