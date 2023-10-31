const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema({
  exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  number: { type: Number, required: true },
});

const Series = mongoose.model("Series", SeriesSchema);
module.exports = Series;
