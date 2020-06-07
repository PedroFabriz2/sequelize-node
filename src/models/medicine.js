const { Model, DataTypes } = require('sequelize');

class medicines extends Model {
    static init(sequelize){
        super.init({
            substancia: DataTypes.STRING,
            laboratorio: DataTypes.STRING,
            produto: DataTypes.STRING,
        }, {
            sequelize,
            freezeTableName: true
        })
    }
}

module.exports = medicines;