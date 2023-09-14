import mongoose from "mongoose";
import userSchema from "./user.schema";
import { UserDocument } from "./user.types";
import mongoDB from "@/server/config/database";

// const userRepository = mongoDB.connection
//   ? (mongoDB.connection.model("User") as mongoose.Model<UserDocument>)
//   : mongoose.model<UserDocument>("User", userSchema);

// export default userRepository;
