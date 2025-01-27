import mongoose from 'mongoose';
const { Schema } = mongoose; // Corrected: Extract 'Schema' from 'mongoose'

const userSchema = new Schema({
 
  name:String,
  Mobile:Number,
  email:String,
  hidden: Boolean,
});

const User = mongoose.model('User', userSchema); // Corrected capitalization for 'User'
export default User;
