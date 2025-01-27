import User from "./models/users.js";
import Note from "./models/notes.js";
import cors from "cors"
// import { userData } from "./test.js";
import express from "express";
import mongoose from "mongoose";

// Connect to MongoDB, specifying the 'users' database
await mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const port = 5000;

// Use express.json() to parse JSON bodies
app.use(express.json());
app.use(cors())

// Define the root route to save a new user to the database
// Backend POST request handler
app.post('/user', async (req, res) => {
    try {
      const { name, email, mobile } = req.body; // Extract the data from the request body
      const user = new User({ name, email, mobile, hidden: false });
      await user.save(); // Save the user to MongoDB
  
      // Send a JSON response back to the client
      res.json({ message: 'Data added to database!' });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ message: 'Error saving user' });
    }
  });
  

// Define a route to save a note
app.post('/note', async (req, res) => {
  try {
    const { title, desc } = req.body; // Get note data from the request body

    // Validate incoming data
    if (!title || !desc) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    // Save note to MongoDB
    const note = new Note({
      title,
      desc,
      hidden: false,
    });
    await note.save();

    // Send success response as JSON
    res.status(200).json({ message: "Note successfully added to the database!" });
  } catch (error) {
    console.error("Error saving note:", error.message);
    res.status(500).json({ message: "Error saving note" });
  }
});

app.get('/note', async (req, res) => {
  try {
    const notes = await Note.find({ hidden: false }); // Retrieve notes where `hidden` is false
    res.status(200).json(notes); // Send the notes as a JSON response
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    // console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Error fetching notes", error: error.message });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
