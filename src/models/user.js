import Sequelize from "sequelize";
import sequelize from "../config/database.config";

class User extends Model {}
User.init({
    mailname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    personalnummer: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    akadgrad: {
        type: Sequelize.STRING,
        allowNull: true
    }
},{sequelize, modelName: 'user'});