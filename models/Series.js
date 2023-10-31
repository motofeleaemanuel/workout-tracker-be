const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema({
  exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },
  reps: { type: String, required: true },
  weight: { type: String, required: true },
  number: { type: Number, required: true },
});

const Series = mongoose.model("Series", SeriesSchema);
module.exports = Series;
