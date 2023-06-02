import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();

// Connecting to the database
mongoose
  .connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });

// Create server
const app = express();
app.use(express.json({ limit: "50mb" }));

// Habilitar bodyparser (de esta manera podemos leer "form-data" como "x-www-form-ulrencoded")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

app.use("/", usersRoutes);


const server = http.createServer(app);


const port = process.env.API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
