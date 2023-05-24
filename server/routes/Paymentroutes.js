import express from "express";
import { CreateOrder, Paymentverify } from "../controller/Payment.js";

const router = express.Router();

// routes for Razorpay Payment

router.post("/create-order", CreateOrder);
router.post("/payment-verify", Paymentverify);

export default router;
