const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Medicines = require('../models/medicine');

const connection = new Sequelize(dbConfig);

Medicines.init(connection);

module.exports = connection;

