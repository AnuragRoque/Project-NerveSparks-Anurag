const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const dealershipRoutes = require('./dealershipRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', userRoutes);
router.use('/dealerships', dealershipRoutes);
router.use('/auth', authRoutes);

module.exports = router;