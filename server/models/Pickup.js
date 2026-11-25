import mongoose from "mongoose";

const pickupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    phone: { type: String, required: true, match: /^[6-9]\d{9}$/ },
    pincode: { type: String, required: true, match: /^\d{6}$/ },
    address: { type: String, required: true, trim: true, maxlength: 250 },
    type: { type: String, enum: ["Ghar", "Dukaan", "Society", "Restaurant"], default: "Ghar" },
    plan: { type: String, enum: ["Ek baar", "Ghar Roz", "Dukaan Plus"], default: "Ghar Roz" },
    date: { type: Date, required: true },
    slot: { type: String, required: true },
    status: { type: String, enum: ["pending", "confirmed", "picked", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Pickup", pickupSchema);
