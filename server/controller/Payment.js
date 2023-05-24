import Booking from "../models/Booking-schema.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import config from "../controller/config/config.js";

const instance = new Razorpay({
  key_id: config.KEY,
  key_secret: config.KEY_SECRET,
});
export const CreateOrder = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;
    console.log(bookingId);
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
    console.log(razorpay_order_id);
    const BookingId = req.query.bookingId;
    const amount = req.query.amount;
    console.log(amount);
    console.log(req.query.bookingId);

    const key_secret = config.KEY_SECRET;

    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    console.log(generated_signature);

    console.log(razorpay_signature);
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
      res.redirect(`http://localhost:3000/success?id=${BookingId}`);
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
