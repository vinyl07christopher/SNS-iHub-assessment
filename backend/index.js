const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
const connectDB = require("./config/mongoDB.js");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");

dotEnv.config();
connectDB();

app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true, // Allows credentials such as cookies or authorization headers
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

//
//
// VALIDATE INPUT USING PACKAGE IN BACKEND
// FIND HOW TO VALIDATE FRONT END INPUT
//
//
const PORT = process.env.PORT || 4001;

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
