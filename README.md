# Phirse – Waste Management (MERN)

**M**ongoDB · **E**xpress · **R**eact (Vite) · **N**ode.js

## Chalane ke steps

1. MongoDB chalu rakhein (local ya Atlas).
2. `cp server/.env.example server/.env` aur `MONGO_URI`, `ADMIN_KEY` bharein.
3. Dependencies: `npm run install:all`
4. Pincode data daalein: `npm run seed`
5. Dono ek saath chalayein: `npm run dev`
   - Website: http://localhost:5173
   - API: http://localhost:5000/api/health

## API

| Method | Route | Kaam |
|---|---|---|
| GET | `/api/areas/check/:pincode` | Pincode par service + slots |
| GET | `/api/areas` | Active shehar list |
| POST | `/api/pickups` | Naya pickup book karna |
| GET | `/api/pickups?status=pending` | Saari bookings (header `x-admin-key`) |
| PATCH | `/api/pickups/:id` | Status badalna: pending / confirmed / picked / cancelled |

Admin example:
```
curl -H "x-admin-key: <ADMIN_KEY>" http://localhost:5000/api/pickups
```

## Folder structure
```
server/  index.js, models/(Area, Pickup), routes/(areas, pickups), seed.js
client/  src/(App, BookingForm, WasteGuide, api, data, styles)
```

## Aage kya jod sakte hain
JWT login (customer/admin dashboard), Razorpay payment, SMS (Twilio/MSG91), contact form.
