const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/userRoute");
const shop = require("./controller/shopRoute");
const product = require("./controller/productRoute");
const event = require("./controller/eventRoute");
const coupon = require("./controller/couponCodeRoute");
const payment = require("./controller/paymentRoute");
const order = require("./controller/orderRoute");
const conversation = require("./controller/conversationRoute");
const message = require("./controller/messageRoute");
const withdraw = require("./controller/withdrawRoute");

app.get("/", (req, res) => {
  res.send("backend is working");
});

app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// this is for handling errors
app.use(ErrorHandler);

module.exports = app;