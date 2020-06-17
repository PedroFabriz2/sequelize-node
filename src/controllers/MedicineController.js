const Medicines = require('../models/medicine');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
        const filter = req.query.filter;

        const medicine = await Medicines.findAll({
            where: {
                substancia: {
                  [Op.iLike]: `%${filter}%`,  
                }
              }
      }) 
        
        return res.json(medicine);
    }
};