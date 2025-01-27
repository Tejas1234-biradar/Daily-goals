import mongoose from 'mongoose';
const { Schema } = mongoose; // Corrected: Extract 'Schema' from 'mongoose'

const noteSchema = new Schema({
 
  title: String,
  desc: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

const Note = mongoose.model('Note', noteSchema); // Corrected capitalization for 'User'
export default Note;
