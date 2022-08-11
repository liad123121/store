import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "express-async-errors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("No URI has been given!");
    }

    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error(err as string);
  }

  app.listen(4000, () => {
    console.log("Server is up on port 4000!");
  });
};

start();
