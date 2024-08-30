const User = require("../model/user.model");
const { generateToken } = require("../utils/jwt.js");

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(403).json({ message: "Bad Request" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid Credentials" });

    const token = generateToken(user._id);

    // Set cookie with JWT
    res.cookie("jwt_token", token, {
      httpOnly: true,
      secure: process.env.PRODUCTION_MODE, // Set to true in production
      sameSite: "Strict",
    });

    return res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "error while attempting to log in" });
  }
};

// LOGOUT
const logout = (req, res) => {
  try {
    res.clearCookie("jwt_token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "error while attempting to log out" });
  }
};

// SIGN_UP
const signup = async (req, res) => {
  const { firstName, lastName, email, mobileNo, role, password } = req.body;

  if (!firstName || !lastName || !email || !mobileNo || !role || !password) return res.status(400).json({ message: "Bad Request" });

  // VALIDATE USING PACKAGE

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      mobileNo,
      role,
      password,
    });

    const user = await newUser.save();

    res.status(200).json({ message: "Registered sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error while trying to register new user" });
  }
};

const isAuth = (req, res) => {
  res.status(200).json({ message: "user is authorized" });
};

module.exports = { login, logout, signup, isAuth };
