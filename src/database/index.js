const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const medicines = require('../models/medicine');

const connection = new Sequelize(dbConfig);

medicines.init(connection);

module.exports = connection;

