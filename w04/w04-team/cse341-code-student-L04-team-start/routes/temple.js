const routes = require("express").Router();
const temples = require("../controllers/temple.js");

// TEACHER
routes.get("/list", temples.findAll);
routes.get("/:temple_id", temples.findOne);
routes.post("/create", temples.create);

// ASSIGNMENT
routes.put("/update/:temple_id", temples.update);
routes.delete("/delete/:temple_id", temples.delete);
routes.delete("/deleteAll", temples.deleteAll);
routes.get("/list/additionalInfo", temples.findAllAdditionalInfo);

module.exports = routes;
