const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { createcoupan } = require('../controller/coupanController');
router.post("/coupan",authenticateJWT,createcoupan);
module.exports = router;