export const WASTE = {
  "Geela kachra": { yes: ["Sabzi aur phal ke chhilke", "Bacha hua khana", "Chai ki patti", "Phool aur patte"], no: ["Plastic ki thaili", "Dawai ya sirynge", "Tel ya chemical"], tip: "Geele kachre ko 24 ghante se zyada na rakhein, badbu nahi aayegi." },
  "Sookha": { yes: ["Kaagaz aur akhbaar", "Cardboard ke dibbe", "Plastic ki botal", "Kaanch ki botal, tin"], no: ["Geela ya tel laga kaagaz", "Tooti hui cheeni-mitti", "Thermocol ka gandaa packing"], tip: "Botal aur dibbe ko ek baar kharach ke saaf kar lein, recycling behtar hoti hai." },
  "E-waste": { yes: ["Purane phone aur charger", "Laptop, keyboard", "TV, mixer, iron", "Battery (alag thaili mein)"], no: ["Tooti hui CFL ya tubelight", "Gas cylinder"], tip: "Phone dene se pehle data mita lein. Hum bhi wipe karke dete hain." },
  "Khatarnaak": { yes: ["Dawai ki khaali strip", "Pen cell", "Paint ke dabbe", "Sanitary waste (alag thaili)"], no: ["Khuli dawai nali mein bahana", "Jalte hue kuch bhi"], tip: "Sanitary aur dawai ka kachra laal thaili mein, pickup ke time saathi ko bata dein." },
};

export const SERVICES = [
  ["Ghar ka rozana pickup", "Geela aur sookha kachra alag dibbon mein. Gaadi aapke gate par, tay samay par."],
  ["Dukaan aur office", "Cartons, plastic aur kaagaz ka hafte mein do baar pickup, saath mein weight ki raseed."],
  ["Society aur RWA", "Compost pit lagwana, staff ki training aur mahine ka kachra report."],
  ["Restaurant ka geela kachra", "Khana bachna, tel aur sabzi ke chhilke alag. Biogas plant tak seedha."],
  ["E-waste aur purani cheezein", "Phone, charger, TV, fridge. Data wipe ke saath, sarkari manjoori wale recycler ko."],
  ["Construction malba", "Chhote ghar ke repair se lekar bade project tak, tipper aur mazdoor sahit."],
];

export const STEPS = [
  ["Pincode daalein", "Dekhein ki aapke area mein kaun-sa slot khaali hai."],
  ["Plan chunein", "Rozana, hafte mein teen baar ya sirf ek baar."],
  ["Gaadi aati hai", "Hamara saathi aapke gate se kachra leta hai aur SMS bhejta hai."],
  ["Recycle report", "Har mahine dekhein ki kitna kachra kahan gaya."],
];

export const PLANS = [
  { name: "Ek baar", price: "₹149", per: "/ pickup", items: ["Ek baar ka pickup", "40 kg tak kachra", "Same-day slot (agar khaali ho)"], cta: "Book karein" },
  { name: "Ghar Roz", price: "₹299", per: "/ mahina", items: ["Rozana subah pickup", "Geela aur sookha alag dibbe", "Mahine ki recycle report", "Phone par pickup SMS"], cta: "Trial shuru karein", featured: true },
  { name: "Dukaan Plus", price: "₹1,199", per: "/ mahina", items: ["Hafte mein 6 pickup", "150 kg tak kachra", "GST wala bill", "E-waste ka muft pickup"], cta: "Baat karein" },
];

export const REVIEWS = [
  ["Pehle kachre wala kabhi aata tha, kabhi nahi. Ab roz subah saade saat baje gaadi gate par hoti hai.", "Harpreet Kaur", "Model Town, Hoshiarpur"],
  ["Society mein compost pit lagne ke baad maintenance ka kharcha kam hua, aur bagiche ke liye khaad bhi mil gayi.", "Rajesh Sharma", "Secretary, Green Valley RWA, Jalandhar"],
  ["Dukaan ke cartons ka pehle dhher lagta tha. Ab hafte mein do baar uthate hain aur weight ki parchi bhi dete hain.", "Manpreet Singh", "Kirana store, Ludhiana"],
];

export const STATS = [["48,200+", "parivaar jo roz hume dete hain kachra"], ["1,360 ton", "recycle hua pichhle mahine"], ["6 shehar", "Punjab aur Haryana mein"], ["96%", "pickup tay samay par"]];
