const express =require("express")
const { logController } = require("../controller/logController");
const { authenticateJWT } = require('../middleware/authentication');
const router = express.Router();
//define our routes
router.post("/logs",authenticateJWT,logController);

module.exports = router;