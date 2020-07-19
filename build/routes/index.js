"use strict";
var router = require("express").Router();
var apiRoutes = require("./todo");
// API Routes
router.use("/api", apiRoutes);
module.exports = router;
