const User = require("../models/User.js");

const createUser = async (req, res) => {
  const { given_name, family_name, email, picture } = req.body;
  const userId = req.userId;
  console.log(userId);
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).send({ user });
    }
    const createdUser = await User.create({
      userId,
      email,
      givenName: given_name,
      familyName: family_name,
      picture,
    });
    res.status(200).send({ user: createdUser });
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkForUser = async (req, res) => {
  const userId = req.userId;
  console.log(userId)
  const user = await User.findOne({ userId });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  res.status(200).send({ user });
};

module.exports = { createUser, checkForUser };
