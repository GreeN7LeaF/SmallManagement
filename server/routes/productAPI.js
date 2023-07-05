const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProductByID,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");


// api/product/
router.route("/").get(getAllProduct);
router.route("/").post(addProduct);
router.route("/:id").get(getProductByID);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
