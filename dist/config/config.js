"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.DB_USER = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_DATABASE = void 0;
var _dotenv = require("dotenv");
// importar el paquete instalado

(0, _dotenv.config)();
var PORT = process.env.PORT || 4000;
exports.PORT = PORT;
var DB_PORT = process.env.DB_PORT || 5432;
exports.DB_PORT = DB_PORT;
var DB_USER = process.env.DB_USER || 'postgres';
exports.DB_USER = DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD || '0000';
exports.DB_PASSWORD = DB_PASSWORD;
var DB_DATABASE = process.env.DB_DATABASE || '1prueba';
exports.DB_DATABASE = DB_DATABASE;