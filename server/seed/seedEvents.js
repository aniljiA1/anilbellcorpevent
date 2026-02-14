require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Event = require("../models/Event");

const seedEvents = async () => {
  try {
    await connectDB();

    // Clear existing events
    await Event.deleteMany();
    console.log("Old events removed");

    const events = [
      {
        name: "React Conference 2026",
        organizer: "Bellcorp Tech",
        location: "New York",
        date: new Date("2026-03-15T10:00:00"),
        description: "A conference about React and frontend technologies.",
        capacity: 150,
        category: "Technology",
      },
      {
        name: "Node.js Bootcamp",
        organizer: "Dev Academy",
        location: "San Francisco",
        date: new Date("2026-04-10T09:00:00"),
        description: "Learn backend development with Node.js.",
        capacity: 100,
        category: "Technology",
      },
      {
        name: "Startup Networking Meetup",
        organizer: "Startup Hub",
        location: "Chicago",
        date: new Date("2026-02-25T18:00:00"),
        description: "Meet founders and investors.",
        capacity: 80,
        category: "Business",
      },
      {
        name: "Digital Marketing Masterclass",
        organizer: "Growth Experts",
        location: "Los Angeles",
        date: new Date("2026-05-12T11:00:00"),
        description: "Master modern marketing strategies.",
        capacity: 120,
        category: "Marketing",
      },
      {
        name: "AI & Machine Learning Summit",
        organizer: "FutureTech",
        location: "Boston",
        date: new Date("2026-06-20T09:30:00"),
        description: "Explore AI innovations and trends.",
        capacity: 200,
        category: "Technology",
      },
      {
        name: "Music Festival 2026",
        organizer: "LiveNation",
        location: "Miami",
        date: new Date("2026-07-18T16:00:00"),
        description: "Annual outdoor music festival.",
        capacity: 500,
        category: "Entertainment",
      },
      {
        name: "Photography Workshop",
        organizer: "Creative Studio",
        location: "Seattle",
        date: new Date("2026-03-05T14:00:00"),
        description: "Hands-on photography training.",
        capacity: 40,
        category: "Art",
      },
      {
        name: "Fitness & Wellness Expo",
        organizer: "HealthPro",
        location: "Denver",
        date: new Date("2026-08-08T10:00:00"),
        description: "Fitness brands and wellness talks.",
        capacity: 300,
        category: "Health",
      },
      {
        name: "Cybersecurity Workshop",
        organizer: "SecureNet",
        location: "Austin",
        date: new Date("2026-09-15T09:00:00"),
        description: "Learn how to protect digital systems.",
        capacity: 90,
        category: "Technology",
      },
      {
        name: "E-commerce Growth Summit",
        organizer: "ShopPro",
        location: "Atlanta",
        date: new Date("2026-10-10T10:00:00"),
        description: "Strategies for scaling online businesses.",
        capacity: 130,
        category: "Business",
      },
      // 10 more events for larger dataset
      {
        name: "UX/UI Design Bootcamp",
        organizer: "DesignLab",
        location: "Portland",
        date: new Date("2026-04-20T10:00:00"),
        description: "Learn UI/UX design fundamentals.",
        capacity: 75,
        category: "Design",
      },
      {
        name: "Blockchain Expo",
        organizer: "CryptoWorld",
        location: "Las Vegas",
        date: new Date("2026-11-02T09:00:00"),
        description: "Blockchain technology and crypto insights.",
        capacity: 220,
        category: "Technology",
      },
      {
        name: "Entrepreneurship Seminar",
        organizer: "BizGrowth",
        location: "Dallas",
        date: new Date("2026-03-30T13:00:00"),
        description: "Learn how to start your own business.",
        capacity: 110,
        category: "Business",
      },
      {
        name: "Yoga Retreat",
        organizer: "ZenLife",
        location: "Phoenix",
        date: new Date("2026-05-25T08:00:00"),
        description: "Relax and rejuvenate with yoga sessions.",
        capacity: 60,
        category: "Health",
      },
      {
        name: "Gaming Convention",
        organizer: "GameWorld",
        location: "San Diego",
        date: new Date("2026-07-12T10:00:00"),
        description: "Latest trends in gaming industry.",
        capacity: 400,
        category: "Entertainment",
      },
      {
        name: "Content Creator Meetup",
        organizer: "MediaHub",
        location: "Nashville",
        date: new Date("2026-08-14T15:00:00"),
        description: "Networking event for content creators.",
        capacity: 85,
        category: "Marketing",
      },
      {
        name: "Cloud Computing Workshop",
        organizer: "CloudX",
        location: "San Jose",
        date: new Date("2026-09-22T09:30:00"),
        description: "AWS & Azure hands-on training.",
        capacity: 140,
        category: "Technology",
      },
      {
        name: "Film Production Seminar",
        organizer: "CinemaPro",
        location: "Hollywood",
        date: new Date("2026-06-15T11:00:00"),
        description: "Behind the scenes of filmmaking.",
        capacity: 95,
        category: "Art",
      },
      {
        name: "Career Fair 2026",
        organizer: "TalentConnect",
        location: "Houston",
        date: new Date("2026-04-05T09:00:00"),
        description: "Meet recruiters from top companies.",
        capacity: 250,
        category: "Business",
      },
      {
        name: "Mobile App Development Bootcamp",
        organizer: "AppMasters",
        location: "Orlando",
        date: new Date("2026-12-01T10:00:00"),
        description: "Build mobile apps with React Native.",
        capacity: 120,
        category: "Technology",
      },
    ];

    await Event.insertMany(events);

    console.log("20 events seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedEvents();
