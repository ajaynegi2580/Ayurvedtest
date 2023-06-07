import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import slotRoute from "./routes/slotroutes.js";
import PaymentRoute from "./routes/Paymentroutes.js";
import UserDetailsRoute from "./routes/Userdetailsroutes.js";
import config from "./controller/config/config.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// MongoDB Connection Code
app.use(function (req, res, next) {
  // for localhost
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // for production
  // res.setHeader("Access-Control-Allow-Origin", "http://34.227.27.46");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const url = config.MONGO_URL;

mongoose
  .connect(url)
  .then(() => console.log("DB is connected successfully.."))
  .catch((err) => console.log("Error while connecing with database..", err));

// Route Part
app.use("/api/v1", slotRoute);
// Payment Route
app.use("/api/v1", PaymentRoute);
// For checking Appointments Details
app.use("/api/v1", UserDetailsRoute); // app.use("/api/slots", import('./routes/slotroutes'))

// Sending Credentials form Here...
app.get("/api/v1/getkey", (req, res) => {
  // res.status(200).json({ message: "Test successful" });
  res.status(200).json({ key: config.key_id });
});

app.listen(config.PORT, () => {
  console.log(`Server is running at ${config.PORT}`);
});
