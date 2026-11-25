import { Router } from "express";
import Area from "../models/Area.js";
import Pickup from "../models/Pickup.js";

const router = Router();

const adminOnly = (req, res, next) =>
  req.get("x-admin-key") === process.env.ADMIN_KEY ? next() : res.status(401).json({ message: "Allowed nahi." });

// POST /api/pickups -> naya pickup book karo
router.post("/", async (req, res, next) => {
  try {
    const { name, phone, pincode, address, type, plan, date, slot } = req.body;

    const area = await Area.findOne({ pincode, active: true });
    if (!area) return res.status(422).json({ message: "Is pincode par abhi pickup nahi hai." });
    if (!area.slots.includes(slot)) return res.status(422).json({ message: "Yeh slot uplabdh nahi hai." });

    const d = new Date(date);
    const tomorrow = new Date(); tomorrow.setHours(0, 0, 0, 0); tomorrow.setDate(tomorrow.getDate() + 1);
    if (isNaN(d) || d < tomorrow) return res.status(422).json({ message: "Pickup kal ya uske baad ki date par hi ho sakta hai." });

    const pickup = await Pickup.create({ name, phone, pincode, address, type, plan, date: d, slot });
    res.status(201).json({ id: pickup._id, date: pickup.date, slot: pickup.slot, city: area.city });
  } catch (e) {
    if (e.name === "ValidationError") return res.status(400).json({ message: "Kripya saari jaankari sahi bharein." });
    next(e);
  }
});

// GET /api/pickups (admin) ?status=pending
router.get("/", adminOnly, async (req, res, next) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    res.json(await Pickup.find(filter).sort({ date: 1 }).limit(200));
  } catch (e) { next(e); }
});

// PATCH /api/pickups/:id (admin) body: { status }
router.patch("/:id", adminOnly, async (req, res, next) => {
  try {
    const p = await Pickup.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
    if (!p) return res.status(404).json({ message: "Pickup nahi mila." });
    res.json(p);
  } catch (e) { next(e); }
});

export default router;
