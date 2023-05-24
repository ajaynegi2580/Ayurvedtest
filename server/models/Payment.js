import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    // Payment related Details

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    orderId: {
      type: String,
      required: true,
    },

    paymentId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define the booking model
const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
