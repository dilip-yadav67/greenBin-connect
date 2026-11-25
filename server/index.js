import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import areas from "./routes/areas.js";
import pickups from "./routes/pickups.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/areas", areas);
app.use("/api/pickups", pickups);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Kuch gadbad ho gayi. Thodi der baad dobara koshish karein." });
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`API chal rahi hai: http://localhost:${PORT}`)))
  .catch((e) => { console.error("MongoDB connect nahi hua:", e.message); process.exit(1); });
