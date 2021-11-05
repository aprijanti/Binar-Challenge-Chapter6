const sequelize = require('./sequelize')
const { Model, DataTypes } = require('sequelize')

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        tableName: 'user_game',
        timestamps: false
    }
)

module.exports = User