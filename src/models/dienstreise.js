import Sequelize from "sequelize";
import sequelize from "../config/database.config";

class Dienstreise extends Model() {}
Dienstreise.init({
    
}, {sequelize, modelName: "dienstreise"});

export {Dienstreise};