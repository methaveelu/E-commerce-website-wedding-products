const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is working');
})

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});