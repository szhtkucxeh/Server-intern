const express = require ('express');
const userController = require('./controllers.js');


var userRauter = express.Router();
userRauter.post("/create",userController.create);
userRauter.get("/gets", userController.get);
userRauter.get("/gets/:first_name", userController.get);
userRauter.post("/gets", userController.get);
// userRauter.put("/:_id", function (req, res){});


module.exports = userRauter;