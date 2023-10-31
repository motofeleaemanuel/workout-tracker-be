const express = require("express");
const { createUser, checkForUser } = require("../controllers/userController");
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyTokenMiddleware");

const router = express.Router();

router.post("/createUser", verifyTokenMiddleware, createUser);
router.get("/check", verifyTokenMiddleware, checkForUser);

module.exports = router;
