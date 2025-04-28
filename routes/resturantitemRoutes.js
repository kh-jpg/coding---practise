const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { getresturant } = require('../controller/resturantitemController');
router.post("/fetchresturant",authenticateJWT,getresturant);
module.exports = router;