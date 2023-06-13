"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Producto = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var Producto = _database.sequelize.define('evento', {
  idEvento: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(80),
    allowNull: false
  },
  imagen: {
    type: _sequelize.DataTypes.BLOB('long'),
    allowNull: false
  }
});
exports.Producto = Producto;