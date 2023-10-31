const Exercise = require("../models/Exercise");
const Series = require("../models/Series");
const Workout = require("../models/Workout");

const createWorkout = async (req, res) => {
  const { workout, userId } = req.body;
  try {
    const newWorkout = await Workout.create({
      name: workout.name,
      category: workout.category,
      userId,
    });
    for (let i = 0; i < workout.exercises.length; i++) {
      const addedExercise = await Exercise.create({
        workoutId: newWorkout._id,
        name: workout.exercises[i].name,
      });
      await Workout.findByIdAndUpdate(newWorkout._id, {
        $push: { exercises: addedExercise._id },
      });

      for (let j = 0; j < workout.exercises[i].sets.length; j++) {
        const newSet = await Series.create({
          exerciseId: addedExercise._id,
          number: workout.exercises[i].sets[j].number,
          reps: workout.exercises[i].sets[j].reps,
          weight: workout.exercises[i].sets[j].weight,
        });
        await Exercise.findByIdAndUpdate(addedExercise._id, {
          $push: { series: newSet._id },
        });
      }
    }
    return res.status(200).send({ message: "Workout Created" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getAllWorkouts = async (req, res) => {
  const { userId, category, searchQuery } = req.query;
  try {
    let query = { userId };
    if (category !== "null" && category) {
      query.category = category;
    } else if (searchQuery !== "null" && searchQuery) {
      query.name = { $regex: searchQuery, $options: "i" };
    }
    const workouts = await Workout.find(query).populate({
      path: "exercises",
      populate: {
        path: "series",
      },
    });
    if (!workouts || workouts.length === 0) {
      return res.status(404).json({ message: "No workouts found." });
    }
    return res.status(200).json(workouts);
  } catch (err) {
    console.error("Error in getAllWorkouts:", err);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching workouts." });
  }
};

const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id).populate({
      path: "exercises",
      populate: {
        path: "series",
      },
    });
    if (workout) return res.status(200).send(workout);
    return res.status(404).send({ message: "Workout not found" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { createWorkout, getAllWorkouts, getWorkoutById };
