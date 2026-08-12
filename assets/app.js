
const PRODUCTS = [
 {id:1,slug:"air-move-01-men",name:"AIR-MOVE 01 男款比赛服",category:"competition",gender:"men",price:199,color:"#173f35",tag:"NEW",sizes:["S","M","L","XL"],colors:["深绿","黑色"],desc:"轻量、快干、适合高强度羽毛球比赛的专项运动上衣。"},
 {id:2,slug:"air-move-01-women",name:"AIR-MOVE 01 女款比赛服",category:"competition",gender:"women",price:199,color:"#173b62",tag:"NEW",sizes:["XS","S","M","L"],colors:["藏蓝","白色"],desc:"针对女性运动体态设计，兼顾肩背活动空间与腰身稳定性。"},
 {id:3,slug:"court-02-men",name:"COURT 02 男款训练T恤",category:"training",gender:"men",price:159,color:"#252a2d",tag:"BEST",sizes:["S","M","L","XL","XXL"],colors:["炭黑","灰色"],desc:"适合日常训练和多球练习的耐穿型训练 T 恤。"},
 {id:4,slug:"court-02-women",name:"COURT 02 女款训练T恤",category:"training",gender:"women",price:159,color:"#8c3d4e",tag:"BEST",sizes:["XS","S","M","L"],colors:["酒红","黑色"],desc:"柔软弹力面料，适合高频训练与日常运动。"},
 {id:5,slug:"cshang-club",name:"CShang CLUB 队服",category:"team",gender:"unisex",price:219,color:"#6c2f2f",tag:"TEAM",sizes:["S","M","L","XL","XXL"],colors:["酒红","深绿","藏蓝"],desc:"适合高校、俱乐部与球队使用的团队比赛服，可进行号码和姓名定制。"},
 {id:6,slug:"air-lite-01-shorts",name:"AIR-LITE 01 轻量短裤",category:"training",gender:"men",price:129,color:"#263d4b",tag:"",sizes:["S","M","L","XL"],colors:["深灰","藏蓝"],desc:"轻量运动短裤，适合训练、比赛和日常穿着。"},
 {id:7,slug:"match-01-skirt",name:"MATCH 01 女款运动短裙",category:"competition",gender:"women",price:149,color:"#354f42",tag:"",sizes:["XS","S","M","L"],colors:["深绿","黑色"],desc:"羽毛球专项运动裙裤，兼顾活动自由度与比赛观感。"},
 {id:8,slug:"cshang-basic",name:"CShang BASIC 训练短袖",category:"training",gender:"unisex",price:99,color:"#9b9d93",tag:"SALE",sizes:["S","M","L","XL","XXL"],colors:["浅灰","白色"],desc:"简洁基础款，适合热身、训练和俱乐部活动。"}
];

function money(n){return "¥"+Number(n).toFixed(0)}
function getProduct(slug){return PRODUCTS.find(p=>p.slug===slug)}
function getCart(){return JSON.parse(localStorage.getItem("cshang_cart")||"[]")}
function saveCart(cart){localStorage.setItem("cshang_cart",JSON.stringify(cart));updateCartCount()}
function addCart(product,size="M",color=null,qty=1){
 const cart=getCart(), key=product.id+"_"+size+"_"+(color||product.colors[0]);
 const found=cart.find(i=>i.key===key);
 if(found) found.qty+=qty;
 else cart.push({key,id:product.id,slug:product.slug,name:product.name,price:product.price,color:color||product.colors[0],size,qty});
 saveCart(cart);openCart();renderCartDrawer();
}
function removeCart(key){saveCart(getCart().filter(i=>i.key!==key));renderCartDrawer()}
function changeQty(key,d){
 const cart=getCart();const i=cart.find(x=>x.key===key);if(!i)return;i.qty+=d;if(i.qty<=0)return removeCart(key);saveCart(cart);renderCartDrawer()
}
function cartTotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0)}
function cartQty(){return getCart().reduce((s,i)=>s+i.qty,0)}
function updateCartCount(){const el=document.getElementById("cartCount");if(el)el.textContent=cartQty()}
function openCart(){document.getElementById("drawer")?.classList.add("open");document.getElementById("overlay")?.classList.add("show")}
function closeCart(){document.getElementById("drawer")?.classList.remove("open");document.getElementById("overlay")?.classList.remove("show")}
function renderCartDrawer(){
 const el=document.getElementById("cartItems");if(!el)return;const cart=getCart();
 el.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><div class="mini" style="--c:${PRODUCTS.find(p=>p.id===i.id)?.color||"#173f35"}"></div><div style="flex:1"><b>${i.name}</b><div class="muted" style="font-size:12px;margin-top:4px">${i.color} · ${i.size}</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:9px"><span>${money(i.price)}</span><span><button class="btn small" onclick="changeQty('${i.key}',-1)">−</button> <b>${i.qty}</b> <button class="btn small" onclick="changeQty('${i.key}',1)">+</button></span></div></div><button class="iconbtn" onclick="removeCart('${i.key}')">×</button></div>`).join(""):`<div class="empty" style="padding:50px 15px"><h3>购物袋是空的</h3><p class="muted">去看看 CShang 的新品吧。</p><a class="btn dark" href="shop.html">去购物</a></div>`;
 const total=document.getElementById("drawerTotal");if(total)total.textContent=money(cartTotal());
 updateCartCount();
}
function initShell(){
 updateCartCount();renderCartDrawer();
 document.getElementById("overlay")?.addEventListener("click",closeCart);
}
function productCard(p){
 return `<article class="product-card"><a href="product.html?slug=${p.slug}"><div class="product-img" style="--c:${p.color}">${p.tag?`<span class="badge">${p.tag}</span>`:""}<button class="heart" onclick="event.preventDefault();this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button></div></a><div class="product-info"><a href="product.html?slug=${p.slug}"><div class="product-name">${p.name}</div><div class="product-sub">${p.gender==='women'?'女款':p.gender==='men'?'男款':'中性款'} · ${p.category==='competition'?'比赛系列':p.category==='training'?'训练系列':'团队系列'}</div></a><div class="product-row"><span class="price">${money(p.price)}</span><button class="btn dark small" onclick='addCart(${JSON.stringify(p)},"${p.sizes[1]||p.sizes[0]}","${p.colors[0]}",1)'>加入购物袋</button></div></div></article>`
}
function renderFeatured(targetId="featured"){
 const el=document.getElementById(targetId);if(el)el.innerHTML=PRODUCTS.slice(0,4).map(productCard).join("")
}
function queryParams(){return new URLSearchParams(location.search)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
