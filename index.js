import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use("/", router);

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, "client", "build")));

// Route all other requests to the client-side application
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
