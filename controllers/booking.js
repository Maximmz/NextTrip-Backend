import Booking from "../models/Booking.js";
import Room from "../models/Room.js";

// Create a new booking
export const createBooking = async (req, res, next) => {
  const {
    user,
    room,
    hotel,
    checkIn,
    checkOut,
    guests,
    totalPrice,
    paymentStatus
  } = req.body;

  try {
    // Create a new instance of the Booking model
    const newBooking = new Booking({
      user,
      room,
      hotel,
      checkIn,
      checkOut,
      guests,
      totalPrice,
      paymentStatus
    });

    // Save the booking object to the database
    const savedBooking = await newBooking.save();

    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};


// Get all bookings
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};

// Get a specific booking
export const getBooking = async (req, res, next) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found." });
    }
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};

// Update a booking
export const updateBooking = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found." });
    }
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};

// Delete a booking
export const deleteBooking = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found." });
    }
    res.status(200).json({ message: "Booking deleted successfully." });
  } catch (err) {
    next(err);
  }
};
