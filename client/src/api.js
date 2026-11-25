async function request(url, options) {
  const res = await fetch(url, { headers: { "Content-Type": "application/json" }, ...options });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Kuch gadbad ho gayi.");
  return data;
}

export const checkPincode = (pin) => request(`/api/areas/check/${pin}`);
export const getCities = () => request("/api/areas");
export const bookPickup = (body) => request("/api/pickups", { method: "POST", body: JSON.stringify(body) });
