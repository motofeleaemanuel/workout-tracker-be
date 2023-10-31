const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    email: { type: String, required: true },
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
