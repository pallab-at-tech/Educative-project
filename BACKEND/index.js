import "dotenv/config";
import express from "express";
import { ConnectDb } from "./db/db.js";
import authRoute from "./routes/authRoute.js";

const app = express();

//mongoDb connection
ConnectDb();

const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}/`);
});
