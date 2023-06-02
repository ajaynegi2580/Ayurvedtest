import Booking from "../models/Booking-schema.js";
import moment from "moment/moment.js";

export const getAvailability = async (req, res) => {
  try {
    const { date } = req.query;
    // console.log(date);
    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const availableSlots = [
      "9:00am",
      "9:30am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
      "12:00pm",
      "12:30pm",
      "02:00pm",
      "02:30pm",
      "03:00pm",
      "03:30pm",
      "04:00pm",
      "04:30pm",
      "05:00pm",
      "05:30pm",
    ];

    const dateObj = moment(date, "YYYY-MM-DD");
    const startOfDay = dateObj.startOf("day").toDate();
    const endOfDay = dateObj.endOf("day").toDate();

    // Get all bookings for the requested date
    const bookings = await Booking.find({
      date: { $gte: startOfDay, $lte: endOfDay },
    });
    // console.log(bookings);

    // Remove booked slots from the available slots
    bookings.forEach(async (booking) => {
      console.log(booking);

      if (booking && booking.paymentStatus === "pending") {
        await Booking.findByIdAndDelete(booking._id);

        console.log("I'm here at delete pending paymemt location...");
      }

      const index = availableSlots.indexOf(booking.slot);

      if (index !== -1) {
        availableSlots.splice(index, 1);
      }
    });

    res.status(200).json({
      success: true,
      data: availableSlots,
      defaultSlot: [
        "9:00am",
        "9:30am",
        "10:00am",
        "10:30am",
        "11:00am",
        "11:30am",
        "12:00pm",
        "12:30pm",
        "02:00pm",
        "02:30pm",
        "03:00pm",
        "03:30pm",
        "04:00pm",
        "04:30pm",
        "05:00pm",
        "05:30pm",
      ],
    });
  } catch (e) {
    console.error(e);
  }
};
