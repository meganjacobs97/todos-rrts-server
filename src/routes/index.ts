const router = require("express").Router();
const apiRoutes = require("./todo");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
