import Sequelize from "sequelize";
import sequelize from "../config/database.config";

class DienstReiseAusland extends Model() {}
DienstReiseAusland.init({

}, {sequelize, modelName: "dienstReiseAusland"});

export {DienstReiseAusland};