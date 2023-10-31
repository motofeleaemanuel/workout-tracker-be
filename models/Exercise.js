const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  workoutId: { type: mongoose.Schema.Types.ObjectId, ref: "Workout" },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  name: { type: String, required: true },
  series: [{ type: mongoose.Schema.Types.ObjectId, ref: "Series" }],
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
