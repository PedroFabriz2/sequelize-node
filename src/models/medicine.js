const { Model } = require('sequelize');

class Medicine extends Model {
    static init(sequelize){
        super.init({
            substânica: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            laboratorio: DataTypes.STRING,
            codigoggrem: DataTypes.STRING,
            registro: DataTypes.STRING,
            ean1: DataTypes.STRING,
            ean2: DataTypes.STRING,
            ean3: DataTypes.STRING,
            produto: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Medicine;