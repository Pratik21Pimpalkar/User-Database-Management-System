import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  marital: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model("User", userSchema);
export default User;
