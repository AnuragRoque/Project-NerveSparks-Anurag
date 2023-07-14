const bcrypt = require('bcrypt');
const config = require('../config');
const mongodb = require('mongodb');

const User = function(user) {
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
  this.ownedVehicles = user.ownedVehicles;
};

User.prototype.hashPassword = async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

User.prototype.comparePasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
};

User.prototype.save = async function() {
  const db = await mongodb.connect(config.dbUrl);
  const collection = db.collection('users');
  const result = await collection.insertOne(this);
  db.close();
  return result;
};

User.prototype.toJSON = function() {
  const { _id, password, ...user } = this;
  user.id = _id.toString();
  return user;
};

User.findById = async function(id) {
  const db = await mongodb.connect(config.dbUrl);
  const collection = db.collection('users');
  const result = await collection.findOne({ _id: new mongodb.ObjectID(id) });
  db.close();
  return result ? new User(result) : null;
};

User.findByEmail = async function(email) {
  const db = await mongodb.connect(config.dbUrl);
  const collection = db.collection('users');
  const result = await collection.findOne({ email });
  db.close();
  return result ? new User(result) : null;
};

module.exports = User;