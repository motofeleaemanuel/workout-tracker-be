const express = require("express");
const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyTokenMiddleware");
const {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
} = require("../controllers/workoutController");

const router = express.Router();

router.post("/createWorkout", verifyTokenMiddleware, createWorkout);
router.get("/getAllWorkouts", verifyTokenMiddleware, getAllWorkouts);
router.get("/getWorkout/:id", verifyTokenMiddleware, getWorkoutById);

module.exports = router;
