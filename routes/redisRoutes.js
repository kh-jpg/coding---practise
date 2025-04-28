const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { flushRedisController,deletekeyRedisController } = require('../controller/redisController');
//console.log("flushRedisController",flushRedis);
router.post("/flush",authenticateJWT,flushRedisController);

//console.log("deletekeyRedisController",deletekeyRedis);
router.post("/delete-key",authenticateJWT,deletekeyRedisController);
module.exports = router;
