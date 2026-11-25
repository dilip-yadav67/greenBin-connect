import { useState } from "react";
import { WASTE } from "./data.js";

export default function WasteGuide() {
  const [key, setKey] = useState("Geela kachra");
  const d = WASTE[key];
  const list = (a) => <ul>{a.map((x) => <li key={x}>{x}</li>)}</ul>;
  return (
    <>
      <div className="tabs" role="tablist">
        {Object.keys(WASTE).map((k) => (
          <button key={k} role="tab" className="tab" aria-selected={k === key} onClick={() => setKey(k)}>{k}</button>
        ))}
      </div>
      <div className="panel">
        <div className="yes"><h3>Ye daalein</h3>{list(d.yes)}</div>
        <div className="no"><h3>Ye na daalein</h3>{list(d.no)}</div>
        <div className="tip"><h3>Dhyan rakhein</h3><p style={{ color: "var(--ink2)", fontSize: 15 }}>{d.tip}</p></div>
      </div>
    </>
  );
}
