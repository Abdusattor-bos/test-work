import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv({ path: "./config.env" });
import app from "./app.js";

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Database connection established");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
