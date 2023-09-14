import mongoose from "mongoose";
import { UserDocument } from "./user.types";

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: {
      required: true,
      type: String,
    },
    fullname: {
      required: true,
      type: String,
    },
    sex: {
      required: true,
      type: String,
    },
    dob: {
      required: true,
      type: Date,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
