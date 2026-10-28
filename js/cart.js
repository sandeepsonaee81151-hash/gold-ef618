// Cart & wishlist (localStorage)
const CART_KEY="jk_cart", WISH_KEY="jk_wish";
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch{return []}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartBadge()}
function getWish(){try{return JSON.parse(localStorage.getItem(WISH_KEY))||[]}catch{return []}}
function saveWish(w){localStorage.setItem(WISH_KEY,JSON.stringify(w));updateCartBadge()}
function addToCart(id,qty=1){const c=getCart();const i=c.find(x=>x.id===id);if(i)i.qty+=qty;else c.push({id,qty});saveCart(c);showToast(L("कार्ट में जोड़ा गया","Added to cart"))}
function removeFromCart(id){saveCart(getCart().filter(x=>x.id!==id))}
function updateQty(id,qty){const c=getCart();const i=c.find(x=>x.id===id);if(i){i.qty=Math.max(1,qty);saveCart(c)}}
function cartCount(){return getCart().reduce((s,x)=>s+x.qty,0)}
function cartTotal(){return getCart().reduce((s,x)=>{const p=getProduct(x.id);return s+(p?p.price*x.qty:0)},0)}
function toggleWish(id){let w=getWish();if(w.includes(id))w=w.filter(x=>x!==id);else w.push(id);saveWish(w);return w.includes(id)}
function isWished(id){return getWish().includes(id)}
function updateCartBadge(){
  document.querySelectorAll(".cart-count").forEach(e=>e.textContent=cartCount());
  document.querySelectorAll(".wish-count").forEach(e=>e.textContent=getWish().length);
}
function showToast(msg){
  let t=document.querySelector(".toast");if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t)}
  t.textContent=msg;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),2200);
}
window.addToCart=addToCart;window.removeFromCart=removeFromCart;window.updateQty=updateQty;
window.toggleWish=toggleWish;window.isWished=isWished;window.getCart=getCart;window.getWish=getWish;
window.cartTotal=cartTotal;window.cartCount=cartCount;window.updateCartBadge=updateCartBadge;window.showToast=showToast;