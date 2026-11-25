import "dotenv/config";
import mongoose from "mongoose";
import Area from "./models/Area.js";

const data = [
  ["146001", "Hoshiarpur"], ["146021", "Hoshiarpur"],
  ["144001", "Jalandhar"], ["144002", "Jalandhar"],
  ["141001", "Ludhiana"], ["141002", "Ludhiana"],
  ["143001", "Amritsar"], ["160017", "Chandigarh"], ["134003", "Ambala"],
];

await mongoose.connect(process.env.MONGO_URI);
await Area.deleteMany({});
await Area.insertMany(data.map(([pincode, city]) => ({ pincode, city })));
console.log(`${data.length} pincode jod diye gaye.`);
await mongoose.disconnect();
