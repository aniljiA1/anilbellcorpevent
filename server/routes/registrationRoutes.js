const express = require("express");
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Register for Event
router.post("/:eventId", protect, async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // ❌ Check capacity
    if (event.availableSeats <= 0) {
      return res.status(400).json({ message: "Event is full" });
    }

    // ❌ Prevent double registration
    const alreadyRegistered = await Registration.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (alreadyRegistered) {
      return res.status(400).json({ message: "Already registered" });
    }

    // ✅ Create registration
    await Registration.create({
      user: req.user._id,
      event: eventId,
    });

    // ✅ Decrease seats
    event.availableSeats -= 1;
    await event.save();

    res.json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Cancel Registration
router.delete("/:eventId", protect, async (req, res) => {
  try {
    const { eventId } = req.params;

    const registration = await Registration.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (!registration)
      return res.status(404).json({ message: "Registration not found" });

    await registration.deleteOne();

    // Increase seat count
    const event = await Event.findById(eventId);
    event.availableSeats += 1;
    await event.save();

    res.json({ message: "Registration cancelled" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get My Registered Events
router.get("/my", protect, async (req, res) => {
  const registrations = await Registration.find({
    user: req.user._id,
  }).populate("event");

  res.json(registrations);
});

module.exports = router;
