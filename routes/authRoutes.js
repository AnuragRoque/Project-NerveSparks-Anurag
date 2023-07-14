const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/user-login', authController.userLogin);
router.post('/dealership-login', authController.dealershipLogin);
router.post('/admin-login', authController.adminLogin);
router.post('/logout', authController.logout);
router.post('/change-password', authController.changePassword);

module.exports = router;