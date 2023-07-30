const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const ErrorHandler = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://e-commerce-client-0xts.onrender.com",
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
const conversation = require("./controller/conversationRoute");
const coupon = require("./controller/couponCodeRoute");
const event = require("./controller/eventRoute");
const message = require("./controller/messageRoute");
const order = require("./controller/orderRoute");
const payment = require("./controller/paymentRoute");
const product = require("./controller/productRoute");
const shop = require("./controller/shopRoute");
const user = require("./controller/userRoute");
const withdraw = require("./controller/withdrawRoute");


app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use("/api/v2/conversation", conversation);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/event", event);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/payment", payment);
app.use("/api/v2/product", product);
app.use("/api/v2/shop", shop);
app.use("/api/v2/user", user);
app.use("/api/v2/withdraw", withdraw);

// this is for handling errors
app.use(ErrorHandler);

module.exports = app;