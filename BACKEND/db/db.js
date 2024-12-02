import mongoose from "mongoose";

export const ConnectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log("MongoDb error", err));
};
