const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Medicine = require('../models/medicine');

const connection = new Sequelize(dbConfig);

Medicine.init(connection);

module.exports = connection;

