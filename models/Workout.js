const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
