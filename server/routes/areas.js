import { Router } from "express";
import Area from "../models/Area.js";

const router = Router();

// GET /api/areas/check/146001
router.get("/check/:pincode", async (req, res, next) => {
  try {
    const { pincode } = req.params;
    if (!/^\d{6}$/.test(pincode)) return res.status(400).json({ message: "6 ank ka sahi pincode daalein." });

    const area = await Area.findOne({ pincode, active: true });
    if (!area) return res.json({ serviceable: false });

    res.json({ serviceable: true, city: area.city, slots: area.slots });
  } catch (e) { next(e); }
});

// GET /api/areas -> shehar list
router.get("/", async (_req, res, next) => {
  try {
    const cities = await Area.distinct("city", { active: true });
    res.json(cities.sort());
  } catch (e) { next(e); }
});

export default router;
