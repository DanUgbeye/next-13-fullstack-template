import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  email: string;
  fullname: string;
  sex: string;
  dob: Date;
  address?: string;
  phoneNumber?: string;
  profileImage?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id: string;
  email: string;
  fullname: string;
  sex: string;
  dob: Date;
  address?: string;
  phoneNumber?: string;
  profileImage?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
