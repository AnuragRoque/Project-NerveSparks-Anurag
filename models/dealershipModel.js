const bcrypt = require('bcrypt');
const config = require('../config');
const mongodb = require('mongodb');

const Dealership = function(dealership) {
  this.name = dealership.name;
  this.email = dealership.email;
  this.password = dealership.password;
  this.address = dealership.address;
  this.phone = dealership.phone;
  this.cars = dealership.cars;
  this.deals = dealership.deals;
  this.soldVehicles = dealership.soldVehicles;
};

Dealership.prototype.hashPassword = async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

Dealership.prototype.comparePasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
};

Dealership.prototype.save = async function() {
  const db = await mongodb.connect(config.dbUrl);
  const collection = db.collection('dealerships');
  const result = await collection.insertOne(this);
  db.close();
  return result;
};

Dealership.prototype.toJSON = function() {
  const { _id, password, ...dealership } = this;
  dealership.id = _id.toString();
  return dealership;
};

Dealership.findById = async function(id) {
  const db = await mongodb.connect(config.dbUrl);
  const collection = db.collection('dealerships');
  const result = await collection.findOne({ _id: new mongodb.ObjectID(id) });
  db.close();
  return result ? new Dealership(result) : null;
};

Dealership.findByEmail = async function(email) {
  const db = await mongodb.connect(config.dbUrl);
  const collection = db.collection('dealerships');
  const result = await collection.findOne({ email });
  db.close();
  return result ? new Dealership(result) : null;
};

module.exports = Dealership;