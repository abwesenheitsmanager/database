import Sequelize from "sequelize";
import sequelize from "../config/database.config";
import {User} from "./user";

class Dienstreise extends Model() {}
Dienstreise.init({
    ausland: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    reiseziel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dienstreise_beginn: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dienstreise_ende: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dienst_beginn: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dienst_ende: {
        type: Sequelize.DATE,
        allowNull: false
    },
    reisezweck: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reisemittel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ausgangspunkt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endpunkt: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {sequelize, modelName: "dienstreise"});

User.hasMany(Dienstreise);
Dienstreise.hasMany(User);

export {Dienstreise};