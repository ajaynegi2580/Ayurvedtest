import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slot: {
      type: String,
      required: true,
    },
    // Payment related Details

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    orderId: {
      type: String,
      required: false,
    },

    paymentId: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Define the booking model
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
