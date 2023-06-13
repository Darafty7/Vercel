"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = require("sequelize");
var _config = require("../config/config.js");
var sequelize = new _sequelize.Sequelize(_config.DB_DATABASE,
//nombre de la base de datos
_config.DB_USER,
//usuario
_config.DB_PASSWORD,
//contraseña de la base de datos
{
  host: 'localhost',
  dialect: 'postgres',
  port: _config.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  }
});
exports.sequelize = sequelize;