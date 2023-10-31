const express = require("express");
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyTokenMiddleware");
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/createCategory", createCategory);
router.get("/getAllCategories", verifyTokenMiddleware, getAllCategories);

module.exports = router;
