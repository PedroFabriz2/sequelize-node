const Medicines = require('../models/medicine');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
        const filter = req.query.filter;

        const medicine = await Medicines.findAndCountAll({
          //attributes: ["substancia"],   --> colocamos attributes para filtrar tudo.
            where: {
                substancia: {
                  [Op.iLike]: `%${filter}%`,  
                }
              }
      }) 
        res.header('X-Total-Count', medicine["count"]);
        return res.json(medicine);
    }
};