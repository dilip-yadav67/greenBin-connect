import { useState } from "react";
import { checkPincode, bookPickup } from "./api.js";

const tomorrow = () => {
  const d = new Date(); d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
};

export default function BookingForm({ plan, setPlan }) {
  const [pin, setPin] = useState("");
  const [area, setArea] = useState(null); // { city, slots }
  const [msg, setMsg] = useState(null);   // { type: 'ok' | 'err', text }
  const [busy, setBusy] = useState(false);
  const [f, setF] = useState({ name: "", phone: "", address: "", type: "Ghar", date: tomorrow(), slot: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function onCheck(e) {
    e.preventDefault();
    setMsg(null); setArea(null); setBusy(true);
    try {
      const r = await checkPincode(pin.trim());
      if (!r.serviceable) setMsg({ type: "err", text: "Abhi is pincode par pickup shuru nahi hua. Jaldi hi aa rahe hain." });
      else { setArea(r); setF((x) => ({ ...x, slot: r.slots[0] })); }
    } catch (err) { setMsg({ type: "err", text: err.message }); }
    setBusy(false);
  }

  async function onBook(e) {
    e.preventDefault();
    setMsg(null); setBusy(true);
    try {
      const r = await bookPickup({ ...f, pincode: pin, plan });
      const d = new Date(r.date).toLocaleDateString("hi-IN", { weekday: "long", day: "numeric", month: "long" });
      setMsg({ type: "ok", text: `Pickup book ho gaya! ${d}, ${r.slot}. Booking ID: ${r.id.slice(-6).toUpperCase()}` });
      setArea(null); setPin("");
    } catch (err) { setMsg({ type: "err", text: err.message }); }
    setBusy(false);
  }

  return (
    <form className="chk" id="book" onSubmit={area ? onBook : onCheck}>
      <h3>{area ? `${area.city} mein pickup book karein` : "Aapke area mein pickup hai?"}</h3>
      <small>{area ? "Bas kuch jaankari aur." : "Pincode daalein, agla pickup turant dekhein."}</small>

      <label htmlFor="pin">Pincode</label>
      <input id="pin" inputMode="numeric" maxLength={6} placeholder="jaise 146001" required
        value={pin} onChange={(e) => { setPin(e.target.value); setArea(null); }} />

      {area && (
        <>
          <label htmlFor="name">Aapka naam</label>
          <input id="name" required value={f.name} onChange={set("name")} />
          <label htmlFor="phone">Mobile number</label>
          <input id="phone" inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" title="10 ank ka mobile number" required value={f.phone} onChange={set("phone")} />
          <label htmlFor="address">Poora pata</label>
          <input id="address" required value={f.address} onChange={set("address")} />
          <div className="two">
            <div><label htmlFor="type">Kachra kahan ka</label>
              <select id="type" value={f.type} onChange={set("type")}>
                {["Ghar", "Dukaan", "Society", "Restaurant"].map((t) => <option key={t}>{t}</option>)}
              </select></div>
            <div><label htmlFor="plan">Plan</label>
              <select id="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
                {["Ek baar", "Ghar Roz", "Dukaan Plus"].map((t) => <option key={t}>{t}</option>)}
              </select></div>
          </div>
          <div className="two">
            <div><label htmlFor="date">Date</label>
              <input id="date" type="date" min={tomorrow()} required value={f.date} onChange={set("date")} /></div>
            <div><label htmlFor="slot">Slot</label>
              <select id="slot" value={f.slot} onChange={set("slot")}>
                {area.slots.map((s) => <option key={s}>{s}</option>)}
              </select></div>
          </div>
        </>
      )}

      <button className="btn" type="submit" disabled={busy}>
        {busy ? "Ruko..." : area ? "Pickup book karein" : "Slot check karein"}
      </button>
      {msg && <div id="res" className={msg.type} role="status" style={{ display: "block" }}>{msg.text}</div>}
    </form>
  );
}
