const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes/userRouter.js");
const workoutRouter = require("./routes/workoutRouter.js");
const bodyWeightTrackerRouter = require("./routes/bodyWeightTrackerRouter.js");
const categoryRouter = require("./routes/categoryRouter.js");

dotenv.config();
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://workout-tracker-wryl.onrender.com",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/user", userRouter);
app.use("/api/workout", workoutRouter);
app.use("/api/bodyWeightTracker", bodyWeightTrackerRouter);
app.use("/api/category", categoryRouter);

(async () => {
  try {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
    console.log(process.env.OAUTH_JWKS);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
})();
