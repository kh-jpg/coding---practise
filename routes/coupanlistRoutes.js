const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { coupanlist} = require('../controller/coupanlistController');
router.post("/listcoupan",authenticateJWT,coupanlist);
module.exports = router;