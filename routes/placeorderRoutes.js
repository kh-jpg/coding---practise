const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { placeorder,getordercount,getorderhistory } = require('../controller/placeorderController');
router.post("/orderfood",authenticateJWT,placeorder);
router.post("/ordercount",authenticateJWT,getordercount);
router.post("/orderhistory",authenticateJWT,getorderhistory);

module.exports = router;