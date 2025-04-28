const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { createFood,listAllFoodsForResturant } = require('../controller/foodController');
router.post("/createfood",authenticateJWT,createFood);
router.post("/listallfoods",listAllFoodsForResturant);
module.exports = router;