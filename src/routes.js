const express = require('express');

const routes = express.Router();

const medicineController = require('./controllers/MedicineController');

routes.get('/', medicineController.index);

module.exports = routes;