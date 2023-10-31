const express = require("express");
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyTokenMiddleware");
const {
  addBodyWeightToTracker,
  getAllBodyWeight,
  deleteBodyWeight,
} = require("../controllers/bodyWeightTrackerController");

const router = express.Router();

router.post("/addBodyWeight", addBodyWeightToTracker);
router.get("/getAllBodyWeight/:id", verifyTokenMiddleware, getAllBodyWeight);
router.delete("/deleteBodyWeight/:id", verifyTokenMiddleware, deleteBodyWeight);

module.exports = router;
