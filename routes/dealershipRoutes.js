const express = require('express');
const router = express.Router();
const dealershipController = require('../controllers/dealershipController');
const authController = require('../controllers/authController');

function handleGetRequest(req, res) {
    res.send('Hello, world!');
}
exports.getAllDealerships = function(req, res) {
    res.send('Get all dealerships');
  };
router.get('/', handleGetRequest);
router.get('/:id', dealershipController.getDealershipById);
router.post('/', authController.verifyToken, dealershipController.createDealership);
router.put('/:id', authController.verifyToken, dealershipController.updateDealership);
router.delete('/:id', authController.verifyToken, dealershipController.deleteDealership);
router.get('/:id/cars', dealershipController.getAllCars);
router.get('/:id/cars/sold', dealershipController.getAllSoldVehicles);
router.post('/:id/cars', authController.verifyToken, dealershipController.addCar);
router.get('/:id/deals', dealershipController.getAllDeals);
router.post('/:id/deals', authController.verifyToken, dealershipController.addDeal);
router.get('/:id/sold-vehicles', dealershipController.getAllSoldVehicles);
router.post('/:id/sold-vehicles', authController.verifyToken, dealershipController.addSoldVehicle);

module.exports = router;
