import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unque: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", UserSchema);
export default userModel;
