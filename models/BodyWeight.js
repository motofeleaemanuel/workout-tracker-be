const mongoose = require("mongoose");

const BodyWeightSchema = new mongoose.Schema(
  {
    weight: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const BodyWeight = mongoose.model("BodyWeight", BodyWeightSchema);
module.exports = BodyWeight;
