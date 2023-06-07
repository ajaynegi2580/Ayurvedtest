import Booking from "../models/Booking-schema.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import config from "./config/config.js";
import { sendConfirmationEmail } from "../controller/emailcontroller.js";

const instance = new Razorpay({
  key_id: config.key_id,
  key_secret: config.key_secret,
});
export const CreateOrder = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;

    // Generate an order using Razorpay API
    const order = await instance.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: bookingId,
    });

    res.status(200).json({ order });
  } catch (err) {
    res.status(400).json("Error while creating payment order..");
  }
};

export const Paymentverify = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const BookingId = req.query.bookingId;
    const amount = req.query.amount;

    const key_secret = config.key_secret;

    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    if (generated_signature === razorpay_signature) {
      await Booking.findOneAndUpdate(
        { _id: BookingId },
        {
          $set: {
            paymentStatus: "Paid",
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            amount: amount,
          },
        },
        { new: true }
      );
      // Redirect to the success page
      res.redirect(`http://34.227.27.46/success?id=${BookingId}`);

      // for loacltest
      // res.redirect(`http://localhost:3000/success?id=${BookingId}`);

      if (generated_signature === razorpay_signature) {
        const response = await Booking.findById({ _id: BookingId });
        const {
          name,
          email,
          phone,
          date,
          slot,
          paymentStatus,
          amount,
          paymentId,
        } = response;
        const newdate = new Date(date).toLocaleDateString();
        await sendConfirmationEmail(
          name,
          email,
          phone,
          newdate,
          slot,
          paymentStatus,
          amount,
          paymentId
        );
      }
    } else {
      // Payment verification failed
      console.log("Payment verification failed");
      res.status(400).json({ message: "Payment verification failed" });
    }
  } catch (error) {
    // Error occurred during payment verification
    console.error(error);
    res.status(500).json({ message: "Payment verification error" });
  }
};
