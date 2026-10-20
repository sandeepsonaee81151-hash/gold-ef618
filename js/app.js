// Shared header/footer injection — bilingual
function NAV_LABELS(){return LANG==="hi"
  ?[{href:"index.html",label:"होम"},{href:"shop.html",label:"शॉप"},{href:"orders.html",label:"ऑर्डर"},{href:"about.html",label:"हमारे बारे में"},{href:"contact.html",label:"संपर्क"}]
  :[{href:"index.html",label:"Home"},{href:"shop.html",label:"Shop"},{href:"orders.html",label:"Orders"},{href:"about.html",label:"About"},{href:"contact.html",label:"Contact"}];}

function renderHeader(){
  const el=document.getElementById("header");if(!el)return;
  const path=location.pathname.split("/").pop()||"index.html";
  const nav=NAV_LABELS();
  el.innerHTML=`
  <div class="topbar"><a href="orders.html" style="color:inherit;text-decoration:none"><span data-hi="₹25,000 से ऊपर मुफ़्त शिपिंग • BIS हॉलमार्क ज्वैलरी" data-en="Free shipping on orders above ₹25,000 • BIS Hallmarked Jewellery">${L("₹25,000 से ऊपर मुफ़्त शिपिंग • BIS हॉलमार्क ज्वैलरी","Free shipping on orders above ₹25,000 • BIS Hallmarked Jewellery")}</span></a> <span class="live-price" style="margin-left:12px;font-weight:600;color:#f3dc94"></span> <button onclick="toggleLang()" style="background:transparent;border:1px solid rgba(255,255,255,.4);color:#fff;padding:2px 10px;border-radius:12px;cursor:pointer;font-size:11px;margin-left:10px">${LANG==="hi"?"EN":"हिं"}</button></div>
  <header>
    <div class="container nav">
      <button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.toggle('open')" aria-label="मेन्यू">☰</button>
      <a href="index.html" class="logo">संजय <span>ज्वैलरी</span></a>
      <span style="font-size:13px;color:var(--muted);margin-left:8px;font-weight:500;white-space:nowrap">📞 +91 81151 50061</span>
      <a href="shop.html" class="badge" style="margin-left:12px;font-size:12px">${L("नया कलेक्शन 2026","New Collection 2026")}</a>
      <ul class="nav-links">${nav.map(n=>`<li><a href="${n.href}" ${n.href===path?'style="color:var(--gold)"':''}>${n.label}</a></li>`).join("")}</ul>
      <div class="nav-icons">
        <a href="https://wa.me/918115150061" class="icon-btn social" title="WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
        <a href="https://instagram.com" class="icon-btn social" title="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
        <a href="https://facebook.com" class="icon-btn social" title="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
      </div>
    </div>
    <div class="mobile-menu">
      ${nav.map(n=>`<a href="${n.href}">${n.label}</a>`).join("")}
      <a href="cart.html">${L("कार्ट","Cart")}</a><a href="wishlist.html">${L("पसंदीदा","Wishlist")}</a>
    </div>
  </header>`;
}
function renderFooter(){
  const el=document.getElementById("footer");if(!el)return;
  const shop=L("शॉप","Shop"),help=L("सहायता","Help"),contact=L("संपर्क","Contact");
  const rings=L("रिंग्स","Rings"),neck=L("नेकलेस","Necklaces"),ear=L("ईयररिंग्स","Earrings"),br=L("ब्रेसलेट","Bracelets");
  const faq=L("अक्सर पूछे जाने वाले सवाल","FAQ"),ship=L("शिपिंग","Shipping"),ret=L("रिटर्न","Returns"),cnt=L("संपर्क","Contact");
  const story=L("प्रीमियम हस्तनिर्मित ज्वैलरी। BIS हॉलमार्क, प्रमाणित हीरे, जीवन भर एक्सचेंज।","Premium handcrafted jewellery. BIS hallmarked, certified diamonds, lifetime exchange.");
  const copy=`© 2026 Sanjay Jewellery. All rights reserved. | <a href="privacy.html" style="color:var(--gold)">${L("गोपनीयता नीति","Privacy Policy")}</a> | <a href="terms.html" style="color:var(--gold)">${L("नियम व शर्तें","Terms")}</a> | <a href="size-guide.html" style="color:var(--gold)">${L("साइज़ गाइड","Size Guide")}</a>`;
  el.innerHTML=`
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo" style="color:#fff">संजय <span style="color:var(--gold)">ज्वैलरी</span></a>
          <p style="margin-top:12px;font-size:13px;max-width:300px">${story}</p>
        </div>
        <div><h4>${shop}</h4><ul>
          <li><a href="shop.html?cat=Rings">${rings}</a></li>
          <li><a href="shop.html?cat=Necklaces">${neck}</a></li>
          <li><a href="shop.html?cat=Earrings">${ear}</a></li>
          <li><a href="shop.html?cat=Bracelets">${br}</a></li>
        </ul></div>
        <div><h4>${help}</h4><ul>
          <li><a href="faq.html">${faq}</a></li>
          <li><a href="shipping.html">${ship}</a></li>
          <li><a href="returns.html">${ret}</a></li>
          <li><a href="size-guide.html">${L("साइज़ गाइड","Size Guide")}</a></li>
          <li><a href="privacy.html">${L("गोपनीयता नीति","Privacy Policy")}</a></li>
          <li><a href="terms.html">${L("नियम व शर्तें","Terms")}</a></li>
          <li><a href="contact.html">${cnt}</a></li>
        </ul></div>
        <div><h4>${contact}</h4><ul>
          <li style="white-space:nowrap">📞 +91 81151 50061</li>
          <li>✉ hello@sanjayjewellery.in</li>
          <li>📍 ${L("मुंबई, भारत","Mumbai, India")}</li>
          <li style="white-space:nowrap">💬 WhatsApp: +91 81151 50061</li>
        </ul></div>
      </div>
      <div class="footer-bottom">${copy}</div>
    </div>
  </footer>
  <div class="toast"></div>`;
}

function applyLang(){
  renderHeader();renderFooter();updateCartBadge();updateLangBtn();
  fetchLivePrices();
  if(_qvId!==null){const ov=document.getElementById("qvOverlay");if(ov&&ov.classList.contains("open"))openQuickView(_qvId);}
  document.querySelectorAll("[data-hi][data-en]").forEach(el=>{
    const v = (LANG==="hi"?el.dataset.hi:el.dataset.en);
    if(v.indexOf("<")!==-1) el.innerHTML = v; else el.textContent = v;
  });
  document.querySelectorAll("input[data-placeholder-hi]").forEach(el=>{
    el.placeholder = (LANG==="hi"?el.dataset.placeholderHi:el.dataset.placeholderEn);
  });
  // update <html lang>
  document.documentElement.lang = (LANG==="hi"?"hi":"en");
  const t=document.querySelector("title[data-hi][data-en]");
  if(t) document.title = (LANG==="hi"?t.dataset.hi:t.dataset.en);
}

document.addEventListener("DOMContentLoaded",()=>{applyLang();fetchLivePrices();setInterval(fetchLivePrices,60000);});

const RATE_CACHE_KEY="jk_rates";
async function getJSON(url,signal){const r=await fetch(url,{signal,mode:"cors",cache:"no-store"});if(!r.ok)throw new Error("HTTP "+r.status);return r.json()}
async function fetchLivePrices(){
  const els=[...document.querySelectorAll(".live-price")];
  if(!els.length){return;}
  const setAll=(html,color)=>els.forEach(e=>{e.innerHTML=html;e.style.color=color});
  const showCache=()=>{
    try{
      const c=JSON.parse(localStorage.getItem(RATE_CACHE_KEY));
      if(c&&c.gold&&c.silver){
        setAll(`${L("सोना","Gold")}: ₹${c.gold.toLocaleString("en-IN")}/g &nbsp;|&nbsp; ${L("चांदी","Silver")}: ₹${c.silver.toLocaleString("en-IN")}/g <span style="font-weight:400;opacity:.75;font-size:12px">(${L("अंतिम अपडेट","last update")}: ${c.time})</span>`,"#f3dc94");
        return true;
      }
    }catch(e){}
    return false;
  };
  setAll("⏳ "+L("लाइव रेट लोड हो रहे हैं...","Loading live rates..."),"#f3dc94");
  const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),10000);
  try{
    let goldUsd=null,silverUsd=null,inr=null;
    const sources=[
      async()=>{const d=await getJSON("https://api.gold-api.com/price/XAU",ctrl.signal);goldUsd=d.price;},
      async()=>{const d=await getJSON("https://api.gold-api.com/price/XAG",ctrl.signal);silverUsd=d.price;},
      async()=>{const d=await getJSON("https://api.metals.live/v1/spot",ctrl.signal);const a=Array.isArray(d)?d.find(x=>x.gold):d;goldUsd=goldUsd??a?.gold;silverUsd=silverUsd??a?.silver;},
      async()=>{const d=await getJSON("https://open.er-api.com/v6/latest/USD",ctrl.signal);inr=d?.rates?.INR;},
    ];
    for(const fn of sources){try{await fn()}catch(e){}}
    if(!inr){const d=await getJSON("https://api.exchangerate-api.com/v4/latest/USD",ctrl.signal);inr=d?.rates?.INR;}
    if(!goldUsd||!silverUsd||!inr)throw new Error("rates unavailable");
    const goldG=Math.round((goldUsd/31.1035)*inr);
    const silverG=Math.round((silverUsd/31.1035)*inr);
    const time=new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
    try{localStorage.setItem(RATE_CACHE_KEY,JSON.stringify({gold:goldG,silver:silverG,time}))}catch(e){}
    document.querySelectorAll(".live-price").forEach(e=>{
      e.innerHTML=`${L("सोना","Gold")}: ₹${goldG.toLocaleString("en-IN")}/g &nbsp;|&nbsp; ${L("चांदी","Silver")}: ₹${silverG.toLocaleString("en-IN")}/g <span style="font-weight:400;opacity:.75;font-size:12px">(${time})</span>`;
      e.style.color="#f3dc94";
    });
  }catch(e){
    if(!showCache()){
      document.querySelectorAll(".live-price").forEach(e=>{e.textContent=L("लाइव रेट उपलब्ध नहीं","Live rates unavailable");e.style.color="#ccc";});
    }
  }finally{clearTimeout(timer);}
}
window.fetchLivePrices=fetchLivePrices;

// FAQ accordion
document.addEventListener("click",e=>{
  const q=e.target.closest(".faq-q");if(q){q.parentElement.classList.toggle("open")}
});

let _qvId=null;
function openQuickView(id){
  _qvId=id;
  const p=getProduct(id);if(!p)return;
  let ov=document.getElementById("qvOverlay");
  if(!ov){ov=document.createElement("div");ov.id="qvOverlay";ov.className="qv-overlay";document.body.appendChild(ov);}
  ov.innerHTML=`<div class="qv-modal">
    <button class="qv-close" onclick="closeQuickView()">✕</button>
    <div class="qv-img"><img src="${p.img}" alt="${pname(p)}" onerror="this.onerror=null;this.src='${p.fb}'"></div>
    <div class="qv-info">
      <div class="qv-cat">${pcat(p)} • ${pmetal(p)} ${p.purity}</div>
      <h2>${pname(p)}</h2>
      <div class="rating">★★★★★ <span style="color:var(--muted)">(24 ${L("रिव्यू","reviews")})</span></div>
      <div class="qv-price">${formatPrice(p.price)} <small style="font-size:13px;color:var(--muted);font-weight:400">${L("सहित GST","incl. GST")}</small></div>
      <p class="qv-desc">${pdesc(p)}</p>
      <div class="qv-spec">
        <div><strong>${L("धातु","Metal")}</strong>${pmetal(p)}</div>
        <div><strong>${L("शुद्धता","Purity")}</strong>${p.purity}</div>
        <div><strong>${L("वज़न","Weight")}</strong>${p.weight}</div>
        <div><strong>${L("मेकिंग","Making")}</strong>${p.making}%</div>
        <div><strong>${L("प्रमाणन","Certification")}</strong>${L("BIS हॉलमार्क","BIS Hallmarked")}</div>
        <div><strong>${L("उपलब्धता","Availability")}</strong>${L("स्टॉक में","In Stock")}</div>
      </div>
      <div class="qv-actions">
        <button class="btn btn-gold" onclick="addToCart(${p.id});closeQuickView()">${L("कार्ट में डालें","Add to Cart")}</button>
        <a href="product.html?id=${p.id}" class="btn btn-outline">${L("पूरा विवरण","Full Details")}</a>
      </div>
    </div>
  </div>`;
  ov.classList.add("open");
  ov.onclick=(e)=>{if(e.target===ov)closeQuickView();};
}
function closeQuickView(){const ov=document.getElementById("qvOverlay");if(ov){ov.classList.remove("open");}}
window.openQuickView=openQuickView;window.closeQuickView=closeQuickView;

function productCard(p){
  const wished=isWished(p.id);
  return `<div class="product-card">
    <div class="img-wrap" style="cursor:pointer" onclick="openQuickView(${p.id})">
      <img src="${p.img}" alt="${pname(p)}" onerror="this.onerror=null;this.src='${p.fb}'" loading="lazy">
      <button class="wishlist-btn ${wished?'active':''}" onclick="event.stopPropagation();toggleWish(${p.id});this.classList.toggle('active');updateCartBadge()" aria-label="${L("पसंदीदा","Wishlist")}">${wished?'❤':'♡'}</button>
    </div>
    <div class="info">
      <div class="cat">${pcat(p)} • ${pmetal(p)} ${p.purity}</div>
      <h3 style="cursor:pointer" onclick="openQuickView(${p.id})">${pname(p)}</h3>
      <div class="meta">${p.weight} • ${L("मेकिंग","Making")} ${p.making}%</div>
      <div class="price">${formatPrice(p.price)} <small>${L("सहित GST","incl. GST")}</small></div>
      <div class="actions">
        <a href="product.html?id=${p.id}" class="btn btn-outline">${L("देखें","View")}</a>
        <button class="btn btn-gold" onclick="addToCart(${p.id})">${L("कार्ट में डालें","Add to Cart")}</button>
      </div>
    </div>
  </div>`;
}
window.productCard=productCard;
window.applyLang=applyLang;