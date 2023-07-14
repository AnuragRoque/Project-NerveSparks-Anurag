const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/cars', authController.verifyToken, userController.getAllCars);
router.get('/cars/dealership/:id', authController.verifyToken, userController.getCarsInDealership);
router.get('/cars/:model', authController.verifyToken, userController.getDealershipsWithCar);
router.get('/owned-vehicles', authController.verifyToken, userController.getOwnedVehicles);
router.get('/dealerships/range', authController.verifyToken, userController.getDealershipsWithinRange);
router.get('/deals/:model', authController.verifyToken, userController.getDealsOnCar);
router.get('/deals/dealership/:id', authController.verifyToken, userController.getDealsFromDealership);
router.post('/buy-car', authController.verifyToken, userController.buyCar);

module.exports = router;