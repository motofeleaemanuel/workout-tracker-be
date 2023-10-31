const jwt = require("jsonwebtoken");
const { getKey } = require("../utils/getAuth0Secret");

const verifyTokenMiddleware = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  if (bearerToken) {
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, getKey, function (err, decoded) {
      if (err) {
        return res.status(500).json({ message: "Access token is invalid" });
      }
      const userId = decoded.sub;
      req.userId = userId;
      console.log("req.userId = ", userId);
      next();
    });
  } else {
    return res.status(500).json({ message: "Access token is invalid" });
  }
};

module.exports = { verifyTokenMiddleware };
