const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { listResturant,listResturantV2 ,deleteResturantCache} = require('../controller/resturantlistController');
router.post("/listresturant",listResturant);
router.post("/listresturantv",authenticateJWT,listResturantV2);
router.post("/deleteresturant",authenticateJWT,deleteResturantCache);

module.exports = router;