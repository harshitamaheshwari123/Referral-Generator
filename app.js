const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // ✅ Add this line
const referralRoutes = require("./src/routes/referralRoutes");

const app = express();

app.use(cors()); // ✅ Add this line
app.use(bodyParser.json());

// Register referral routes under /api/
app.use("/api", referralRoutes);

module.exports = app;
