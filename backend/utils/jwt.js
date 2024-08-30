const jwt = require("jsonwebtoken");

const generateToken = (user_id) => {
  const payload = { user_id };
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
};

module.exports = { generateToken };
