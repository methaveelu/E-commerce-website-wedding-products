const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

app.listen(PORT, () => console.log("backend is working on port: ", PORT));