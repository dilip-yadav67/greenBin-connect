# Phirse

A small waste pickup booking app. You enter your pincode, see if we serve your area, pick a date and time slot, and book a pickup. I built it to practice the MERN stack on something closer to a real product than a todo list.

The UI is React (Vite), the API is Express, and data lives in MongoDB. Pincodes and slots come from the database, so adding a new area doesn't need a code change.

## Running it locally

You need Node 18 or newer and a MongoDB instance (local or an Atlas free cluster).

```bash
cp server/.env.example server/.env   # then fill in MONGO_URI and ADMIN_KEY
npm run install:all
npm run seed
npm run dev
```

On Windows, use `copy server\.env.example server\.env` for the first line.

The site runs on http://localhost:5173 and the API on http://localhost:5000. If `http://localhost:5000/api/health` returns `{"ok":true}`, the server is up.

`npm run seed` wipes the areas collection and reloads a few sample pincodes (Hoshiarpur, Jalandhar, Ludhiana, Amritsar, Chandigarh, Ambala). Edit `server/seed.js` if you want your own.

## API

| Method | Route | What it does |
|---|---|---|
| GET | `/api/areas/check/:pincode` | Tells you if a pincode is served and which slots are open |
| GET | `/api/areas` | List of active cities |
| POST | `/api/pickups` | Books a pickup |
| GET | `/api/pickups?status=pending` | Lists bookings (admin) |
| PATCH | `/api/pickups/:id` | Updates status: pending, confirmed, picked or cancelled (admin) |

The two admin routes expect an `x-admin-key` header that matches `ADMIN_KEY` in your `.env`:

```bash
curl -H "x-admin-key: your-key" http://localhost:5000/api/pickups
```

A pickup can only be booked for tomorrow or later, and the slot has to be one of the slots saved for that pincode.

## Project layout

```
server/
  index.js
  models/      Area, Pickup
  routes/      areas, pickups
  seed.js
client/
  src/         App, BookingForm, WasteGuide, api, data, styles
```

Vite proxies `/api` to the server in development, so there's no CORS setup to worry about locally.

## What's missing

- No user accounts. Anyone can book with just a name and phone number.
- The admin side is only API routes with a shared key. There's no dashboard.
- No payments or SMS. The plans on the page are display only.
- No tests yet.
- The production setup isn't done. For deployment, the client will need the API URL set, since the dev proxy won't exist.

Things I'd add next: login with JWT, an admin page for managing bookings, and SMS confirmations.
