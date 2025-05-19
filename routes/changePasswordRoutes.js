const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const  { changePasswordController } = require("../controller/changePasswordController");
console.log("change password Controller:",changePasswordController);
router.post("/changePassword",authenticateJWT,changePasswordController);
module.exports = router;