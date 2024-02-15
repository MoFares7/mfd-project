const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.js');

const Cars = sequelize.define('Cars', {
        id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
        },
        name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        price: {
                type: DataTypes.INTEGER,
                allowNull: false,
        },
        password: {
                type: DataTypes.STRING,
                allowNull: false,
        },
}, {
        tableName: 'Cars',
        timestamps: true,
});

module.exports = Cars;
