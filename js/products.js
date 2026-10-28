// Jewellery product catalog — bilingual (English / Hindi)
const IMG={
  ring:"assets/img/ring.svg",
  necklace:"assets/img/necklace.svg",
  earrings:"assets/img/earrings.svg",
  bracelet:"assets/img/bracelet.svg",
  pendant:"assets/img/pendant.svg",
  silver:"assets/img/silver.svg"
};

// Language state
const LANG_KEY="jk_lang";
let LANG=localStorage.getItem(LANG_KEY)||"hi";
function setLang(l){LANG=l;localStorage.setItem(LANG_KEY,l);if(typeof applyLang==="function")applyLang();if(typeof render==="function")render();if(typeof renderCart==="function")renderCart();if(typeof renderWish==="function")renderWish();updateLangBtn()}
function toggleLang(){setLang(LANG==="hi"?"en":"hi")}
function L(hi,en){return LANG==="hi"?hi:en}
function updateLangBtn(){document.querySelectorAll(".lang-btn").forEach(b=>b.textContent=(LANG==="hi"?"EN":"हिं"))}

const PRODUCTS = [
  {id:1,nameHi:"रॉयल सॉलिटेयर रिंग",nameEn:"Royal Solitaire Ring",categoryHi:"रिंग्स",categoryEn:"Rings",metalHi:"सोना",metalEn:"Gold",purity:"18K",weight:"4.2g",price:45999,making:12,img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",fb:IMG.ring,descHi:"18K सोने में तैयार क्लासिक सॉलिटेयर रिंग। सगाई के लिए परफेक्ट।",descEn:"A timeless solitaire ring crafted in 18K gold with a brilliant-cut diamond. Perfect for engagements.",featured:true},
  {id:2,nameHi:"हेरिटेज कुंदन नेकलेस",nameEn:"Heritage Kundan Necklace",categoryHi:"नेकलेस",categoryEn:"Necklaces",metalHi:"सोना",metalEn:"Gold",purity:"22K",weight:"28.5g",price:189999,making:15,img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",fb:IMG.necklace,descHi:"मीनाकारी के साथ पारंपरिक कुंदन नेकलेस। ब्राइडल मास्टरपीस।",descEn:"Traditional Kundan necklace set with meenakari work. A bridal masterpiece.",featured:true},
  {id:3,nameHi:"डायमंड स्टड ईयररिंग",nameEn:"Diamond Stud Earrings",categoryHi:"ईयररिंग्स",categoryEn:"Earrings",metalHi:"सोना",metalEn:"Gold",purity:"18K",weight:"2.8g",price:32999,making:10,img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",fb:IMG.earrings,descHi:"18K सोने में क्लासिक डायमंड स्टड। रोज़ाना की शान।",descEn:"Classic diamond studs in 18K gold. Everyday elegance.",featured:true},
  {id:4,nameHi:"गोल्ड टेनिस ब्रेसलेट",nameEn:"Gold Tennis Bracelet",categoryHi:"ब्रेसलेट",categoryEn:"Bracelets",metalHi:"सोना",metalEn:"Gold",purity:"18K",weight:"12.0g",price:89999,making:12,img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",fb:IMG.bracelet,descHi:"18K सोने में राउंड डायमंड के साथ स्पार्कलिंग टेनिस ब्रेसलेट।",descEn:"Sparkling tennis bracelet with round diamonds set in 18K gold.",featured:false},
  {id:5,nameHi:"एमराल्ड पेंडेंट",nameEn:"Emerald Pendant",categoryHi:"पेंडेंट",categoryEn:"Pendants",metalHi:"सोना",metalEn:"Gold",purity:"22K",weight:"3.5g",price:24999,making:8,img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",fb:IMG.pendant,descHi:"22K सोने में हरा-भरा एमराल्ड पेंडेंट।",descEn:"Vivid green emerald pendant in 22K gold with delicate chain.",featured:true},
  {id:6,nameHi:"सिल्वर ऑक्सीडाइज़्ड झुमका",nameEn:"Silver Oxidised Jhumka",categoryHi:"ईयररिंग्स",categoryEn:"Earrings",metalHi:"चांदी",metalEn:"Silver",purity:"925",weight:"14.0g",price:2499,making:5,img:"https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600",fb:IMG.silver,descHi:"हस्तनिर्मित ऑक्सीडाइज़्ड चांदी के झुमके।",descEn:"Handcrafted oxidised silver jhumkas with intricate detailing.",featured:false},
  {id:7,nameHi:"मंगलसूत्र क्लासिक",nameEn:"Mangalsutra Classic",categoryHi:"नेकलेस",categoryEn:"Necklaces",metalHi:"सोना",metalEn:"Gold",purity:"22K",weight:"9.0g",price:69999,making:10,img:"https://images.unsplash.com/photo-1588444650738-0c1a3d6e6f5b?w=600",fb:IMG.necklace,descHi:"सोने के पेंडेंट के साथ पारंपरिक काले मोती मंगलसूत्र।",descEn:"Traditional black bead mangalsutra with gold pendant.",featured:false},
  {id:8,nameHi:"कपल बैंड सेट",nameEn:"Couple Band Set",categoryHi:"रिंग्स",categoryEn:"Rings",metalHi:"सोना",metalEn:"Gold",purity:"18K",weight:"6.0g",price:54999,making:12,img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",fb:IMG.ring,descHi:"18K सोने में मैचिंग कपल बैंड सेट।",descEn:"Matching couple bands in 18K gold with subtle engraving.",featured:false},
  {id:9,nameHi:"पर्ल ड्रॉप ईयररिंग",nameEn:"Pearl Drop Earrings",categoryHi:"ईयररिंग्स",categoryEn:"Earrings",metalHi:"सोना",metalEn:"Gold",purity:"18K",weight:"3.2g",price:18999,making:8,img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",fb:IMG.earrings,descHi:"18K सोने में फ्रेशवाटर पर्ल ड्रॉप।",descEn:"Freshwater pearl drops in 18K gold. Graceful and timeless.",featured:false},
  {id:10,nameHi:"कड़ा बैंगल",nameEn:"Kada Bangle",categoryHi:"ब्रेसलेट",categoryEn:"Bracelets",metalHi:"सोना",metalEn:"Gold",purity:"22K",weight:"22.0g",price:159999,making:14,img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",fb:IMG.bracelet,descHi:"पारंपरिक मोटिफ़ के साथ सॉलिड 22K सोने का कड़ा।",descEn:"Solid 22K gold kada with traditional motif. Heirloom piece.",featured:false},
  {id:11,nameHi:"इनिशियल पेंडेंट",nameEn:"Initial Pendant",categoryHi:"पेंडेंट",categoryEn:"Pendants",metalHi:"सोना",metalEn:"Gold",purity:"18K",weight:"2.0g",price:14999,making:6,img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",fb:IMG.pendant,descHi:"18K सोने में पर्सनलाइज़्ड इनिशियल पेंडेंट। उपहार के लिए बढ़िया।",descEn:"Personalised initial pendant in 18K gold. A perfect gift.",featured:false},
  {id:12,nameHi:"सिल्वर चेन",nameEn:"Silver Chain",categoryHi:"नेकलेस",categoryEn:"Necklaces",metalHi:"चांदी",metalEn:"Silver",purity:"925",weight:"8.0g",price:1999,making:4,img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",fb:IMG.silver,descHi:"फाइन 925 स्टर्लिंग सिल्वर चेन।",descEn:"Fine 925 sterling silver chain. Versatile everyday wear.",featured:false}
];
const CATEGORIES_HI=["सभी","रिंग्स","नेकलेस","ईयररिंग्स","ब्रेसलेट","पेंडेंट"];
const CATEGORIES_EN=["All","Rings","Necklaces","Earrings","Bracelets","Pendants"];
const METALS_HI=["सभी","सोना","चांदी"];
const METALS_EN=["All","Gold","Silver"];
function CATEGORIES(){return LANG==="hi"?CATEGORIES_HI:CATEGORIES_EN}
function METALS(){return LANG==="hi"?METALS_HI:METALS_EN}
function getProduct(id){return PRODUCTS.find(p=>p.id===Number(id))}
function formatPrice(n){return "₹"+n.toLocaleString("en-IN")}
function imgFallback(e){e.target.onerror=null;e.target.src="assets/img/placeholder.svg"}
function pname(p){return LANG==="hi"?p.nameHi:p.nameEn}
function pcat(p){return LANG==="hi"?p.categoryHi:p.categoryEn}
function pmetal(p){return LANG==="hi"?p.metalHi:p.metalEn}
function pdesc(p){return LANG==="hi"?p.descHi:p.descEn}
function pcatList(){return LANG==="hi"?CATEGORIES_HI:CATEGORIES_EN}
function pmetalList(){return LANG==="hi"?METALS_HI:METALS_EN}