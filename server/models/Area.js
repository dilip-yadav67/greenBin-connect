import mongoose from "mongoose";

const areaSchema = new mongoose.Schema({
  pincode: { type: String, required: true, unique: true, match: /^\d{6}$/ },
  city: { type: String, required: true },
  active: { type: Boolean, default: true },
  slots: { type: [String], default: ["7:00 - 8:00 AM", "8:00 - 9:00 AM", "5:00 - 6:00 PM"] },
});

export default mongoose.model("Area", areaSchema);
