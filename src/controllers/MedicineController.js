const Medicines = require('../models/medicine');

module.exports = {
    async index(req, res) {
        const medicine = await Medicines.findAll();
        
        return res.json(medicine);
    }
};