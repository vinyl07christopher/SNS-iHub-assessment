const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const AuthMiddleware = async (req, res, next) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const token = req.cookies.jwt_token || req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  try {
    const decoded = jwt.verify(token, secretKey);

    const user = await User.findById(decoded.user_id);
    if (!user) return res.status(404).send("User not found.");

    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = AuthMiddleware;
