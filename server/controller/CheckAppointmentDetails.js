import Booking from "../models/Booking-schema.js";

export const checkAppointment = async (req, res) => {
  let quaryid = req.query.id;
  const bookingId = quaryid.replace(/"/g, "");
  console.log(bookingId);
  try {
    const response = await Booking.findById(bookingId);
    // let response = await Booking.findById({ _id: req.query.id });
    console.log("it come here....");
    console.log(response);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400).json({ message: "Can't fetch details" });
  }
};
