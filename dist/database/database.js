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

// importar el paquete de CreatePoool de mysql2
// import { createPool } from "mysql2/promise"
// import {DB_PORT,
//     DB_USER,
//     DB_PASSWORD,
//     DB_DATABASE} from './config.js'

// //crear y exportar la constante pool con
// // los parametros de la DB
// export const pool = createPool({
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port:DB_PORT,
//     database:DB_DATABASE
// })
exports.sequelize = sequelize;