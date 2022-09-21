//express router configuration
const express = require('express');
const route = express.Router();

//controllers
const SampleController = require('../controllers/sample.controller');

//endpoints
route.get("/", SampleController.getAllData);
route.get("/:id", SampleController.getData);
route.post("/create", SampleController.createData);
route.put("/edit/:id", SampleController.updateAllData);
route.delete("/delete/:id", SampleController.deleteData);

module.exports = route;

