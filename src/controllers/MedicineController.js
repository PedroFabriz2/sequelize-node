const medicines = require('../models/medicine');

module.exports = {
    async index(req, res) {
        const medicine = await medicines.findAll();
        
        return res.json(medicine);
    }
};