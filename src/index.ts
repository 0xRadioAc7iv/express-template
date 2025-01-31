import express, { urlencoded } from "express";
import cors from "cors";
import { PORT } from "./config";
import router from "./routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// Routes
app.use("/api", router);

// Handles non-existing routes & methods
app.all("*", (req, res) => {
  res.sendStatus(405);
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
