const UserModel = require('../models/userModel');

exports.getAllCars = (req, res, next) => {
  // Get all cars
};

exports.getCarsInDealership = (req, res, next) => {
  // Get all cars in a dealership
};

exports.getDealershipsWithCar = (req, res, next) => {
  // Get all dealerships with a certain car
};

exports.getOwnedVehicles = (req, res, next) => {
  // Get all vehicles owned by user
};

exports.getDealershipsWithinRange = (req, res, next) => {
  // Get all dealerships within a certain range based on user location(use maps api)
};

exports.getDealsOnCar = (req, res, next) => {
  // Get all deals on a certain car
};

exports.getDealsFromDealership = (req, res, next) => {
  // Get all deals from a certain dealership
};

exports.buyCar = (req, res, next) => {
  // Allow user to buy a car after a deal is made
};