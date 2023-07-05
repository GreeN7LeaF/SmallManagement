const express = require("express");
const router = express.Router();
const { getAllProType } = require("../controllers/productTypeController");

// api/producttype/
router.route("/").get(getAllProType);

module.exports = router;
