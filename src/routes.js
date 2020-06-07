const express = require('express');

const routes = express.Router();

const medicine = require('./controllers/MedicineController');

routes.get('/', medicine.index);

module.exports = routes;