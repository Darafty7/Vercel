"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _loginController = require("../controllers/loginController.js");
//IMPORTACION DEL ROUTER DESDE EXPRESS

//IMPORTACION DEL CONTROLADOR QUE TIENE LOS METODOS DEL LOGIN Y EL REGISTRO

var router = (0, _express.Router)();

//Respuestas HTTP CORS
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//Peticiones tanto del login y registro.
router.get("/persona", _loginController.getPersona);
router.get("/persona/:id", _loginController.getIdpersona);
router.patch("/persona/:id", _loginController.updatePersona);
router["delete"]("/persona/:id", _loginController.deletePersona);

//Post del regisgtro
router.post("/persona", _loginController.verificarPersonaExistente, _loginController.registroPersona);
//Post del login
router.post("/login", _loginController.loginPersona);
var _default = router;
exports["default"] = _default;