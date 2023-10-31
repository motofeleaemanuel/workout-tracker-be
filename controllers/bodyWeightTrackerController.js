const BodyWeight = require("../models/BodyWeight");

const addBodyWeightToTracker = async (req, res) => {
  try {
    const { bodyWeight, userId } = req.body;
    const dbBodyWeight = await BodyWeight.create({
      userId,
      weight: bodyWeight,
    });
    return res.status(200).send(dbBodyWeight);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getAllBodyWeight = async (req, res) => {
  try {
    const { id } = req.params;
    const allBodyWeightDocuments = await BodyWeight.find({ userId: id });
    if (!allBodyWeightDocuments || allBodyWeightDocuments.length === 0) {
      return res.status(404).send({ message: "No bodyweights found" });
    }
    return res.status(200).send(allBodyWeightDocuments);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteBodyWeight = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await BodyWeight.findOneAndDelete({ _id: id });
    return res.status(200).send({ message: "Deleted Successfully" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { addBodyWeightToTracker, getAllBodyWeight, deleteBodyWeight };
