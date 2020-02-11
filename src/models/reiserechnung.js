import Sequelize from "sequelize";
import sequelize from "../config/database.config";
import {User} from "./user"
import {Dienstreise} from "./dienstreise";

class Reiserechnung extends Model {}
Reiserechnung.init({
    dienststelle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    drbeginn: {
        type: Sequelize.DATE,
        allowNull: true
    },
    drende: {
        type: Sequelize.DATE,
        allowNull:true
    },
    kostenvorschuss: {
        type: Sequelize.STRING,
        allowNull: false
    },
    beilagen: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ausgangspunkt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ziel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    istausland: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    zusdaten: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{ sequelize, modelName: 'reiserechnung' });
User.hasMany(Reiserechnung);
Reiserechnung.hasOne(User);
Reiserechnung.hasOne(Dienstreise);
export{Reiserechnung};
