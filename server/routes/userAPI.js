const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");

// api/user/
router.route("/").get(getAllUsers);

module.exports = router;
