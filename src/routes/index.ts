import Router from "express";
const router = Router.Router();
const apiRoutes = require("./todo");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
