import { useEffect, useState } from "react";
import BookingForm from "./BookingForm.jsx";
import WasteGuide from "./WasteGuide.jsx";
import { getCities } from "./api.js";
import { SERVICES, STEPS, PLANS, REVIEWS, STATS } from "./data.js";

const Logo = () => <a className="logo" href="#"><i></i>Phirse</a>;

export default function App() {
  const [plan, setPlan] = useState("Ghar Roz");
  const [cities, setCities] = useState([]);
  useEffect(() => { getCities().then(setCities).catch(() => {}); }, []);

  const pickPlan = (name) => { setPlan(name); document.getElementById("book").scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <div className="top"><div className="w"><span>Subah 6 baje se raat 8 baje tak · Pickup sirf ₹0 se shuru</span><span>Helpline: 1800-572-0044 (toll free)</span></div></div>
      <header><div className="w">
        <Logo />
        <nav><a href="#kya">Kya uthate hain</a><a href="#seva">Sevayein</a><a href="#kaise">Kaise kaam karta hai</a><a href="#plan">Plans</a><a href="#shehar">Shehar</a></nav>
        <a className="btn" href="#book">Pickup book karein</a>
      </div></header>

      <main>
        <div className="hero"><div className="w">
          <div>
            <h1>Kachra uthao. Phir kaam mein lao.</h1>
            <p className="l">Phirse aapke ghar, dukaan aur society se geela, sookha aur recyclable kachra alag-alag uthata hai, aur use sahi jagah tak pahunchata hai. Tay samay par, tay daam par.</p>
            <div className="row"><a className="btn" href="#book">Pickup book karein</a><a className="btn o" href="#plan">Plans dekhein</a></div>
          </div>
          <BookingForm plan={plan} setPlan={setPlan} />
        </div></div>

        <div className="strip"><div className="w">
          {STATS.map(([n, l]) => <div key={n}><b>{n}</b><span>{l}</span></div>)}
        </div></div>

        <section id="kya"><div className="w">
          <h2>Kachra alag karna aasan hai, bas pata hona chahiye kahan kya jaata hai</h2>
          <p className="sub">Neeche category chuniye. Hum bataenge kya daalna hai, kya nahi.</p>
          <WasteGuide />
        </div></section>

        <section id="seva" className="alt"><div className="w">
          <h2>Ek hi jagah se poora kachra prabandhan</h2>
          <p className="sub">Ghar se lekar factory tak, har zarurat ke liye alag sewa.</p>
          <div className="svc">{SERVICES.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
        </div></section>

        <section id="kaise"><div className="w">
          <h2>Shuru karne mein sirf paanch minute</h2>
          <p className="sub">Koi form nahi bharna, koi kagaz nahi dena.</p>
          <div className="steps">{STEPS.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
        </div></section>

        <section id="plan" className="alt"><div className="w">
          <h2>Saaf daam, koi chhupa hua kharcha nahi</h2>
          <p className="sub">Pehle 7 din ka trial muft hai. Kabhi bhi band kar sakte hain.</p>
          <div className="plans">
            {PLANS.map((p) => (
              <div key={p.name} className={"plan" + (p.featured ? " f" : "")}>
                {p.featured && <span className="badge">Sabse zyada chuna gaya</span>}
                <h3>{p.name}</h3>
                <div className="pr">{p.price}<small> {p.per}</small></div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <button className={"btn" + (p.featured ? "" : " o")} onClick={() => pickPlan(p.name)}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div></section>

        <section id="shehar"><div className="w">
          <h2>Hum kahan-kahan hain</h2>
          <p className="sub">Yeh list seedha database se aati hai. Naya pincode jodte hi yahan dikhega.</p>
          <div className="cities">
            {cities.map((c) => <span key={c}>{c}</span>)}
            <span className="soon">Patiala (jald)</span><span className="soon">Bathinda (jald)</span>
          </div>
        </div></section>

        <section className="alt"><div className="w">
          <h2>Jinhone Phirse chuna</h2><div style={{ height: 30 }} />
          <div className="q">
            {REVIEWS.map(([t, n, s]) => <blockquote key={n}>{t}<cite>{n}<small>{s}</small></cite></blockquote>)}
          </div>
        </div></section>
      </main>

      <div className="cta"><div className="w"><h2>Is hafte se kachre ki chinta chhodiye</h2><a className="btn" href="#book">7 din ka trial shuru karein</a></div></div>
      <footer><div className="w">
        <div className="g">
          <div><div className="logo" style={{ marginBottom: 12 }}><i></i>Phirse</div><p style={{ opacity: .8, maxWidth: 300 }}>Phirse Waste Solutions Pvt. Ltd.<br />SCO 14, Phase 2, Hoshiarpur, Punjab 146001</p></div>
          <div><h4>Sevayein</h4><ul><li>Ghar pickup</li><li>Dukaan / office</li><li>Society</li><li>E-waste</li></ul></div>
          <div><h4>Company</h4><ul><li>Hamare baare mein</li><li>Recycling partner</li><li>Naukri</li><li>Press</li></ul></div>
          <div><h4>Madad</h4><ul><li>FAQ</li><li>Shikayat darj karein</li><li>help@phirse.in</li><li>1800-572-0044</li></ul></div>
        </div>
        <div className="c">© 2026 Phirse Waste Solutions Pvt. Ltd. Yeh ek namuna (demo) website hai.</div>
      </div></footer>
    </>
  );
}
