import Booking from "../models/Booking-schema.js";
import moment from "moment/moment.js";

export const BookingController = async (req, res) => {
  const { name, email, phone, description, slot, selectedDate } =
    req.body.formData;

  // Check if the requested slot is available or not
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

  // Check if the requested date is in the past

  if (moment().diff(moment(selectedDate), "days") > 0) {
    return res
      .status(400)
      .json({ message: "Cannot book appointments for past dates" });
  }

  if (
    moment(selectedDate + " " + slot, "YYYY-MM-DD hh:mma").isBefore(moment())
  ) {
    return res
      .status(400)
      .json({ message: "Cannot book appointments for past time slots" });
  }

  // Incase Users enters wrong time slot.
  if (!availableSlots.includes(slot)) {
    return res.status(400).json({ message: "Invalid time slot" });
  }

  // Check if the date is valid
  if (!moment(selectedDate, "YYYY-MM-DD", true).isValid()) {
    return res.status(400).json({ message: "Invalid date format" });
  }

  // Check if the requested slot is valid or not
  const requestedSlot = moment(slot, "hh:mma").format("hh:mma");

  // Check if the requested slot is already booked or not
  const existingBooking = await Booking.findOne({
    slot: requestedSlot,
    date: selectedDate,
  });

  if (existingBooking) {
    return res.status(409).json({ message: "Slot already booked" });
  }

  const booking = new Booking({
    name,
    email,
    slot: requestedSlot,
    date: selectedDate,
    description,
    phone,
  });

  try {
    await booking.save();
    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating booking" });
  }
};
