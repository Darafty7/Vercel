"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.citas = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var citas = _database.sequelize.define('cita', {
  cita_id: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  aprendiz_id: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED,
    //llave foranea de Aprendiz
    allowNull: false
  },
  fecha: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  },
  //llave foranea de horas
  hora_id: {
    type: _sequelize.DataTypes.TIME,
    // Este tipo de dato se puede almacenar horas en formato "12:30:00" o "18:45:00".           
    allowNull: false
  },
  descripcion: {
    type: _sequelize.DataTypes.TEXT
  }
}, {
  //CreatedAt y UpdatedAt no aparescan.
  timestamps: false
});
exports.citas = citas;
var _default = citas;
exports["default"] = _default;