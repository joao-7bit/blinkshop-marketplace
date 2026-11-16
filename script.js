const SIZES = ["P","M","G"];
const SHOE_SIZES = ["38","39","40","41","42","43"];

const initialProducts = [
  {id:101,name:"Camiseta preta Nike",price:89.90,emoji:"👕",imgKey:"nike",cat:"Camisas",rating:4.7,sizes:SIZES,description:"Camiseta preta lisa com logo Nike."},
  {id:102,name:"Camisa amarela do Brasil",price:349.90,emoji:"👕",imgKey:"brasil",cat:"Camisas",rating:4.9,sizes:SIZES,description:"Camisa da seleção em amarelo, com detalhes verdes e escudo da CBF."},
  {id:103,name:"Camisa preta da seleção",price:399.90,emoji:"👕",imgKey:"selecao",cat:"Camisas",rating:4.9,sizes:SIZES,description:"Camisa preta com estampa gráfica e detalhes dourados."},
  {id:104,name:"Óculos Oakley prateado",price:259.90,emoji:"👓",imgKey:"oakley",cat:"Óculos",rating:4.8,description:"Armação prateada sem aro inferior."},
  {id:105,name:"Óculos de armação preta",price:149.90,emoji:"👓",imgKey:"preto",cat:"Óculos",rating:4.6,description:"Armação preta em estilo retangular."},
  {id:106,name:"Óculos esportivo",price:79.90,emoji:"🕶️",imgKey:"esportivo",cat:"Óculos",rating:4.5,description:"Lente ampla com hastes pretas e azuis."},
  {id:107,name:"Headset sem fio com LED ciano",price:199.90,emoji:"🎧",imgKey:"headsetLed",cat:"Headsets",rating:4.7,description:"Over-ear sem fio com anel de luz na lateral."},
  {id:108,name:"Headset gamer Knup azul",price:99.90,emoji:"🎧",imgKey:"headsetKnup",cat:"Headsets",rating:4.5,description:"Headset gamer com microfone e LEDs azuis."},
  {id:109,name:"Headphone sem fio preto",price:179.90,emoji:"🎧",imgKey:"headphone",cat:"Headsets",rating:4.6,description:"Over-ear sem fio com acabamento liso."},
  {id:110,name:"Nike Air Max Plus Preto e Azul",price:899.90,emoji:"👟",imgKey:"tenisPreto1",cat:"Tênis",rating:4.8,sizes:SHOE_SIZES,description:"Tênis Nike preto com detalhes em azul."},
  {id:111,name:"Nike P-6000 Preto",price:749.90,emoji:"👟",imgKey:"tenisPreto2",cat:"Tênis",rating:4.8,sizes:SHOE_SIZES,description:"Tênis Nike preto com sola branca."},
  {id:112,name:"Nike Air Max 90 Preto",price:799.90,emoji:"👟",imgKey:"tenisPreto3",cat:"Tênis",rating:4.8,sizes:SHOE_SIZES,description:"Tênis Nike preto com detalhes brancos."},
  {id:113,name:"Chapéu Bucket Preto",price:79.90,emoji:"🧢",imgKey:"novo01",cat:"Bonés",rating:4.7,description:"Chapéu bucket preto com cordão."},
  {id:114,name:"Boné New York Branco",price:99.90,emoji:"🧢",imgKey:"novo02",cat:"Bonés",rating:4.8,description:"Boné branco com logo New York."},
  {id:115,name:"Boné Nike Branco",price:89.90,emoji:"🧢",imgKey:"novo03",cat:"Bonés",rating:4.8,description:"Boné branco Nike com aba preta."},
  {id:116,name:"Chapéu Bucket Branco",price:89.90,emoji:"🧢",imgKey:"novo04",cat:"Bonés",rating:4.6,description:"Chapéu bucket branco."},
  {id:117,name:"Boné Preto",price:79.90,emoji:"🧢",imgKey:"novo05",cat:"Bonés",rating:4.6,description:"Boné preto de aba curva."},
  {id:118,name:"Bucket Flamengo",price:99.90,emoji:"🧢",imgKey:"novo06",cat:"Bonés",rating:4.8,description:"Chapéu bucket preto com detalhes do Flamengo."},
  {id:119,name:"Boné Esportivo Preto e Vermelho",price:89.90,emoji:"🧢",imgKey:"novo07",cat:"Bonés",rating:4.7,description:"Boné esportivo preto com detalhes vermelhos."},
  {id:120,name:"Placa-mãe para PC Gamer",price:799.90,emoji:"🖥️",imgKey:"novo08",cat:"Peças de PC",rating:4.7,description:"Placa-mãe para montagem de computador."},
  {id:121,name:"Gabinete Gamer RGB",price:399.90,emoji:"🖥️",imgKey:"novo09",cat:"Computadores",rating:4.7,description:"Gabinete preto com iluminação RGB."},
  {id:122,name:"Gabinete Gamer Aquário",price:999.90,emoji:"🖥️",imgKey:"novo10",cat:"Computadores",rating:4.8,description:"Gabinete estilo aquário com ventoinhas iluminadas."},
  {id:123,name:"Gabinete Gamer Branco",price:699.90,emoji:"🖥️",imgKey:"novo11",cat:"Computadores",rating:4.7,description:"Gabinete branco com painel lateral transparente."},
  {id:124,name:"Gabinete Gamer Preto e Vermelho",price:449.90,emoji:"🖥️",imgKey:"novo12",cat:"Computadores",rating:4.6,description:"Gabinete gamer preto com detalhes vermelhos."},
  {id:125,name:"Processador Intel Core i7",price:1799.90,emoji:"🧩",imgKey:"novo13",cat:"Peças de PC",rating:4.8,description:"Processador Intel Core i7."},
  {id:126,name:"Processador Intel Core i9 X-Series",price:2499.90,emoji:"🧩",imgKey:"novo14",cat:"Peças de PC",rating:4.8,description:"Processador Intel Core i9 X-Series."},
  {id:127,name:"Processador Intel Core Ultra",price:1799.90,emoji:"🧩",imgKey:"novo15",cat:"Peças de PC",rating:4.8,description:"Processador Intel Core Ultra."},
  {id:128,name:"Memória RAM",price:199.90,emoji:"🧩",imgKey:"novo16",cat:"Peças de PC",rating:4.6,description:"Módulo de memória RAM para computador."},
  {id:129,name:"Placa de Vídeo GeForce RTX 1",price:2899.90,emoji:"🎮",imgKey:"novo17",cat:"Peças de PC",rating:4.8,description:"Placa de vídeo GeForce RTX."},
  {id:130,name:"Placa de Vídeo GeForce RTX 2",price:3499.90,emoji:"🎮",imgKey:"novo18",cat:"Peças de PC",rating:4.8,description:"Placa de vídeo GeForce RTX."},
  {id:131,name:"Placa de Vídeo GeForce RTX 3",price:4299.90,emoji:"🎮",imgKey:"novo19",cat:"Peças de PC",rating:4.8,description:"Placa de vídeo GeForce RTX."},
  {id:132,name:"Placa de Vídeo GeForce RTX",price:12999.90,emoji:"🎮",imgKey:"lote2_01",cat:"Peças de PC",rating:4.9,description:"Placa de vídeo GeForce RTX."},
  {id:133,name:"Smartphone Gamer RedMagic Azul",price:5499.90,emoji:"📱",imgKey:"lote2_02",cat:"Celulares",rating:4.8,description:"Smartphone gamer RedMagic com detalhes azuis."},
  {id:134,name:"Smartphone Gamer RedMagic Preto",price:4999.90,emoji:"📱",imgKey:"lote2_03",cat:"Celulares",rating:4.8,description:"Smartphone gamer RedMagic preto."},
  {id:135,name:"Smartphone Gamer RedMagic Branco",price:4999.90,emoji:"📱",imgKey:"lote2_04",cat:"Celulares",rating:4.8,description:"Smartphone gamer RedMagic branco."},
  {id:136,name:"Smartphone Gamer RedMagic Preto e Vermelho",price:5299.90,emoji:"📱",imgKey:"lote2_05",cat:"Celulares",rating:4.8,description:"Smartphone gamer RedMagic preto com detalhes vermelhos."},
  {id:137,name:"Webcam USB",price:179.90,emoji:"📷",imgKey:"lote2_06",cat:"Periféricos",rating:4.6,description:"Webcam USB com suporte ajustável."},
  {id:138,name:"Mouse Gamer RGB",price:149.90,emoji:"🖱️",imgKey:"lote2_07",cat:"Periféricos",rating:4.7,description:"Mouse gamer com iluminação RGB."},
  {id:139,name:"Teclado Gamer RGB",price:229.90,emoji:"⌨️",imgKey:"lote2_08",cat:"Periféricos",rating:4.7,description:"Teclado gamer com iluminação RGB."},
  {id:140,name:"Teclado Gamer Preto e Vermelho",price:189.90,emoji:"⌨️",imgKey:"lote2_09",cat:"Periféricos",rating:4.6,description:"Teclado gamer preto com detalhes vermelhos."},
  {id:141,name:"Teclado Gamer RGB Compacto",price:249.90,emoji:"⌨️",imgKey:"lote2_10",cat:"Periféricos",rating:4.7,description:"Teclado gamer compacto com iluminação RGB."},
  {id:142,name:"Mochila Preta com Bolsos",price:299.90,emoji:"🎒",imgKey:"lote2_11",cat:"Mochilas",rating:4.7,description:"Mochila preta com vários compartimentos."},
  {id:143,name:"Mochila Cinza Clara",price:349.90,emoji:"🎒",imgKey:"lote2_12",cat:"Mochilas",rating:4.7,description:"Mochila cinza clara para uso diário."},
  {id:144,name:"Mochila Preta Minimalista",price:399.90,emoji:"🎒",imgKey:"lote2_13",cat:"Mochilas",rating:4.7,description:"Mochila preta de design minimalista."},
  {id:145,name:"Mochila Cinza Compacta",price:299.90,emoji:"🎒",imgKey:"lote2_14",cat:"Mochilas",rating:4.6,description:"Mochila cinza compacta."},
  {id:146,name:"iPhone Preto",price:4999.90,emoji:"📱",imgKey:"lote3_01",cat:"Celulares",rating:4.8,description:"iPhone preto com três câmeras traseiras."},
  {id:147,name:"Smartphone Dourado Premium",price:7999.90,emoji:"📱",imgKey:"lote3_02",cat:"Celulares",rating:4.8,description:"Smartphone dourado de edição premium."},
  {id:148,name:"Smartphone Branco com Tela Colorida",price:2499.90,emoji:"📱",imgKey:"lote3_03",cat:"Celulares",rating:4.7,description:"Smartphone branco com tela colorida."},
  {id:149,name:"Smartphone Cinza",price:2299.90,emoji:"📱",imgKey:"lote3_04",cat:"Celulares",rating:4.7,description:"Smartphone cinza com tela ampla."}
];

function load(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem("blink_" + key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

let products = load("products", initialProducts);
let favorites = load("favorites", []);
let cart = load("cart", []);
let orders = load("orders", []);
let addresses = load("addresses", []);
let reviews = load("reviews", {});
let notifications = load("notifications", []);
let chats = load("chats", {
  "Loja BlinkShop": [
    {text:"Olá! Bem-vindo ao BlinkShop. Como podemos ajudar?",mine:false,date:"Agora"}
  ],
  "Suporte": [
    {text:"Olá! Este é o suporte demonstrativo da loja.",mine:false,date:"Agora"}
  ]
});

initialProducts.forEach(item => {
  const saved = products.find(p => p.id === item.id);
  if(!saved) products.push(item);
  else if(item.imgKey) saved.imgKey = item.imgKey;
});

let category = "Todas";
let currentProduct = null;
let selectedSize = null;
let activeChat = "Loja BlinkShop";
let couponRate = 0;
let editingId = null;
const TRACKING_STEPS = [
  "Pedido confirmado",
  "Preparando o pacote",
  "Saiu da sede BlinkShop no Brasil",
  "Em trânsito internacional",
  "Saiu para entrega",
  "Pedido entregue"
];
const HEADQUARTERS = [-15.793889, -47.882778];
let deliveryMap = null;
let deliveryMarker = null;
let deliveryRoute = null;
let headquartersMarker = null;
let deliveryCoordinates = null;
let trackingMap = null;
let activeTrackingOrderId = null;
let worldSearchLastRequestAt = 0;

const $ = id => document.getElementById(id);

const money = value => Number(value).toLocaleString("pt-BR", {
  style:"currency",
  currency:"BRL"
});

function safe(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[char]);
}

const hasSizes = p => Array.isArray(p.sizes) && p.sizes.length > 0;
const photo = p => p.imgKey ? IMG[p.imgKey] : null;
const art = p => photo(p) ? `<img src="${safe(photo(p))}" alt="${safe(p.name)}">` : safe(p.emoji);
const sameLine = (item, id, size) => item.id === id && (item.size || "") === (size || "");

products = products.filter(photo);
favorites = favorites.filter(id => products.some(p => p.id === id));
cart = cart.filter(item => products.some(p => p.id === item.id));

function save() {
  const data = {
    products, favorites, cart, orders, addresses,
    reviews, notifications, chats
  };

  Object.entries(data).forEach(([key,value]) => {
    localStorage.setItem("blink_" + key, JSON.stringify(value));
  });
}

function toast(message) {
  const box = $("toast");
  box.textContent = message;
  box.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    box.classList.remove("show");
  }, 2600);
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  $(id).classList.add("active");

  if(id === "cart") {
    renderCart();
    renderSavedAddresses();
    initializeDeliveryMap();
    if(addresses.length) useSavedAddress($("savedAddressSelect").value);
    else newAddress();
  }
  if(id === "favorites") renderFavorites();
  if(id === "orders") {
    renderOrders();
    if(activeTrackingOrderId !== null) showOrderTracking(activeTrackingOrderId);
  }
  if(id === "notifications") renderNotifications();
  if(id === "chat") renderChat();
  if(id === "admin") renderAdmin();

  window.scrollTo({top:0,behavior:"smooth"});
}

function averageRating(id) {
  const list = reviews[id] || [];
  if(!list.length) {
    return products.find(p => p.id === id)?.rating || 0;
  }

  return list.reduce((sum,r) => sum + r.stars,0) / list.length;
}

function makeCard(p) {
  const sized = hasSizes(p);

  return `
    <article class="product-card">
      <div class="product-art ${photo(p) ? "has-img" : ""}">
        <span>${art(p)}</span>
        <button class="favorite-button"
          onclick="toggleFavorite(${p.id})">
          ${favorites.includes(p.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <h3>${safe(p.name)}</h3>
        <div class="product-rating">
          ★ ${averageRating(p.id).toFixed(1)}
          · ${(reviews[p.id] || []).length} avaliações
        </div>
        ${sized ? `<small class="muted">Tamanhos ${p.sizes.join(", ")}</small>` : ""}

        <div class="product-price">${money(p.price)}</div>

        <div class="product-actions">
          <button onclick="${sized ? `openDetail(${p.id})` : `addCart(${p.id})`}">
            ${sized ? "Escolher" : "Comprar"}
          </button>
          <button onclick="openDetail(${p.id})">Ver</button>
        </div>
      </div>
    </article>
  `;
}

function renderCategories() {
  const categories = ["Todas", ...new Set(products.map(p => p.cat))];

  $("categories").innerHTML = categories.map(cat => `
    <button class="${category === cat ? "active" : ""}"
      onclick="setCategory('${safe(cat)}')">
      ${safe(cat)}
    </button>
  `).join("");
}

function setCategory(value) {
  category = value;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const term = $("search").value.toLowerCase().trim();
  const sort = $("sortBy").value;

  let list = products.filter(p =>
    (category === "Todas" || p.cat === category) &&
    (p.name + " " + p.cat + " " + (p.description || ""))
      .toLowerCase().includes(term)
  );

  if(sort === "low") list.sort((a,b) => a.price - b.price);
  if(sort === "high") list.sort((a,b) => b.price - a.price);
  if(sort === "rating") list.sort((a,b) => averageRating(b.id) - averageRating(a.id));
  if(sort === "az") list.sort((a,b) => a.name.localeCompare(b.name,"pt-BR"));

  $("products").innerHTML = list.map(makeCard).join("") ||
    '<div class="empty">Nenhum produto encontrado.</div>';
}

function addCart(id, size = null) {
  const p = products.find(x => x.id === id);
  if(!p) return;

  if(hasSizes(p) && !size) {
    openDetail(id);
    toast("Escolha um tamanho primeiro.");
    return;
  }

  const item = cart.find(x => sameLine(x, id, size));

  if(item) item.qty++;
  else cart.push({id, size:size || null, qty:1});

  save();
  updateCount();
  toast("Produto adicionado ao carrinho! 🛒");
}

function updateCount() {
  $("cartCount").textContent =
    cart.reduce((sum,item) => sum + item.qty,0);
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(x => x !== id)
    : [...favorites,id];

  save();
  renderProducts();
  renderFavorites();
  toast("Lista de favoritos atualizada!");
}

function renderFavorites() {
  $("favoriteProducts").innerHTML =
    products.filter(p => favorites.includes(p.id))
      .map(makeCard).join("") ||
    '<div class="empty">Você ainda não adicionou favoritos.</div>';
}

function openDetail(id) {
  currentProduct = products.find(p => p.id === id);
  if(!currentProduct) return;

  const p = currentProduct;
  selectedSize = hasSizes(p) ? "M" : null;

  $("detailContent").innerHTML = `
    <div class="panel detail-product">
      <div class="detail-art ${photo(p) ? "has-img" : ""}">${art(p)}</div>
      <div>
        <span class="eyebrow">${safe(p.cat)}</span>
        <h2>${safe(p.name)}</h2>
        <p class="product-rating">★ ${averageRating(id).toFixed(1)}</p>
        <div class="product-price">${money(p.price)}</div>
        <p class="muted">${safe(p.description || "Produto BlinkShop.")}</p>
        <div id="sizeBox"></div>
        <button class="primary" onclick="addSelected(${id})">
          Adicionar ao carrinho →
        </button>
        <button class="secondary" onclick="toggleFavorite(${id})">♡ Favoritar</button>
      </div>
    </div>
  `;

  renderSizes();
  renderReviews(id);
  showPage("detail");
}

function renderSizes() {
  const box = $("sizeBox");
  if(!box) return;

  box.innerHTML = selectedSize ? `
    <div class="size-label">Tamanho</div>
    <div class="sizes">
      ${currentProduct.sizes.map(s => `
        <button class="size-btn ${s === selectedSize ? "active" : ""}"
          onclick="setSize('${s}')">${s}</button>
      `).join("")}
    </div>
  ` : "";
}

function setSize(size) {
  selectedSize = size;
  renderSizes();
}

function addSelected(id) {
  addCart(id, selectedSize);
  showPage("cart");
}

function renderReviews(id) {
  const list = reviews[id] || [];

  $("reviewList").innerHTML = list.map(review => `
    <div class="review">
      <b>${safe(review.name)}</b>
      <span class="stars">${"★".repeat(review.stars)}${"☆".repeat(5-review.stars)}</span>
      <p>${safe(review.text)}</p>
      <small class="muted">${safe(review.date)}</small>
    </div>
  `).join("") || '<p class="muted">Ainda não existem avaliações.</p>';
}

function submitReview() {
  if(!currentProduct) return;

  const text = $("reviewText").value.trim();

  if(!text) {
    toast("Escreva um comentário primeiro.");
    return;
  }

  reviews[currentProduct.id] = reviews[currentProduct.id] || [];

  reviews[currentProduct.id].unshift({
    name:$("reviewName").value.trim() || "Cliente",
    stars:Number($("reviewStars").value),
    text,
    date:new Date().toLocaleString("pt-BR")
  });

  $("reviewText").value = "";

  save();
  renderReviews(currentProduct.id);
  renderProducts();
  toast("Avaliação enviada! ⭐");
}

function cartSubtotal() {
  return cart.reduce((sum,item) => {
    const p = products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  },0);
}

function renderCart() {
  $("cartProducts").innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if(!p) return "";
    const sz = item.size || "";

    return `
      <div class="line">
        <span class="cart-item">
          ${photo(p) ? `<img class="thumb" src="${safe(photo(p))}" alt="">`
                  : `<span class="thumb-emoji">${safe(p.emoji)}</span>`}
          <span>
            <b>${safe(p.name)}</b>
            ${sz ? `<br><small>Tamanho ${safe(sz)}</small>` : ""}
            <br><small>${money(p.price)} cada</small>
          </span>
        </span>

        <span class="qty-box">
          <button class="small-btn" onclick="changeQty(${p.id},'${sz}',-1)">−</button>
          ${item.qty}
          <button class="small-btn" onclick="changeQty(${p.id},'${sz}',1)">+</button>
          <br><b>${money(p.price * item.qty)}</b>
        </span>
      </div>
    `;
  }).join("") || '<div class="empty">Seu carrinho está vazio.</div>';

  const subtotal = cartSubtotal();
  const discount = subtotal * couponRate;

  $("subtotal").textContent = money(subtotal);
  $("discount").textContent = money(discount);
  $("total").textContent = money(subtotal - discount);

  updateCount();
}

function validCoordinates(lat, lng) {
  return Number.isFinite(lat) && lat >= -90 && lat <= 90 &&
    Number.isFinite(lng) && lng >= -180 && lng <= 180;
}

function clearDeliveryMarker() {
  if(deliveryMarker && deliveryMap) deliveryMap.removeLayer(deliveryMarker);
  if(deliveryRoute && deliveryMap) deliveryMap.removeLayer(deliveryRoute);
  deliveryMarker = null;
  deliveryRoute = null;
}

function setDeliveryCoordinates(lat, lng, centerMap = false) {
  if(!validCoordinates(lat, lng)) return false;

  deliveryCoordinates = {lat, lng};
  $("addressLatitude").value = lat.toFixed(5);
  $("addressLongitude").value = lng.toFixed(5);
  $("addressCoordinates").textContent =
    `Destino marcado: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;

  if(deliveryMap) {
    clearDeliveryMarker();
    deliveryMarker = L.marker([lat, lng], {title:"Destino da entrega"})
      .addTo(deliveryMap)
      .bindPopup("Destino da entrega");
    deliveryRoute = L.polyline([HEADQUARTERS, [lat, lng]], {
      color:"#ff4d5a",
      weight:3,
      dashArray:"8 8"
    }).addTo(deliveryMap);

    if(centerMap) {
      deliveryMap.fitBounds([HEADQUARTERS, [lat, lng]], {
        padding:[25,25],
        maxZoom:5
      });
    }
  }

  return true;
}

function syncAddressCoordinates() {
  const latValue = $("addressLatitude").value.trim();
  const lngValue = $("addressLongitude").value.trim();
  const lat = Number(latValue);
  const lng = Number(lngValue);

  if(!latValue || !lngValue || !validCoordinates(lat, lng)) {
    deliveryCoordinates = null;
    clearDeliveryMarker();
    $("addressCoordinates").textContent =
      "Informe latitude e longitude válidas ou selecione o destino no mapa.";
    return;
  }

  setDeliveryCoordinates(lat, lng);
}

function initializeAddressSearch() {
  const map = $("deliveryMap");
  if(!map || $("worldAddressSearch")) return;

  const searchPanel = document.createElement("section");
  searchPanel.className = "world-address-search";
  searchPanel.innerHTML = `
    <label for="worldAddressSearch">Encontrar endereço no mundo</label>
    <div class="world-address-controls">
      <input id="worldAddressSearch" class="field" type="search" maxlength="180"
        placeholder="Rua, número, cidade ou CEP">
      <button id="worldAddressSearchButton" class="secondary" type="button">Buscar endereço</button>
    </div>
    <p class="privacy-note">Ao buscar, o texto digitado é enviado ao <a href="https://photon.komoot.io/" target="_blank" rel="noopener">Photon</a>, que consulta dados públicos do <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>. Nem todos os endereços particulares estão mapeados.</p>
    <div id="worldAddressResults" class="world-address-results" aria-live="polite"></div>
  `;
  map.insertAdjacentElement("beforeend", searchPanel);

  $("worldAddressSearchButton").addEventListener("click", searchWorldwideAddress);
  $("worldAddressSearch").addEventListener("keydown", event => {
    if(event.key === "Enter") {
      event.preventDefault();
      searchWorldwideAddress();
    }
  });
}

function worldwideAddressLabel(properties) {
  const locality = properties.city || properties.town ||
    properties.village || properties.locality || "";
  const parts = [
    properties.name,
    [properties.housenumber, properties.street].filter(Boolean).join(" "),
    properties.postcode,
    locality,
    properties.state,
    properties.country
  ].filter(Boolean);

  return [...new Set(parts)].join(", ") || "Local sem nome";
}

async function searchWorldwideAddress() {
  const input = $("worldAddressSearch");
  const button = $("worldAddressSearchButton");
  const results = $("worldAddressResults");
  const query = input.value.trim();
  if(query.length < 3) {
    results.textContent = "Digite pelo menos 3 caracteres para buscar.";
    input.focus();
    return;
  }
  if(Date.now() - worldSearchLastRequestAt < 1000) {
    results.textContent = "Aguarde um instante antes de fazer outra busca.";
    return;
  }

  worldSearchLastRequestAt = Date.now();
  button.disabled = true;
  results.textContent = "Buscando endereços...";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const url = new URL("https://photon.komoot.io/api/");
    url.searchParams.set("q", query);
    url.searchParams.set("limit", "6");
    url.searchParams.set("lang", "pt");
    const response = await fetch(url.toString(), {
      signal:controller.signal,
      headers:{Accept:"application/json"}
    });
    if(!response.ok) throw new Error(`Busca de endereços falhou (${response.status}).`);

    const data = await response.json();
    const features = Array.isArray(data.features) ? data.features : [];
    if(!features.length) {
      results.textContent = "Nenhum resultado encontrado. Tente incluir cidade e país.";
      return;
    }

    const list = document.createElement("div");
    list.className = "world-address-results-list";
    features.forEach(feature => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "world-address-suggestion";
      item.textContent = worldwideAddressLabel(feature.properties || {});
      item.addEventListener("click", () => selectWorldwideAddress(feature));
      list.append(item);
    });
    results.replaceChildren(list);
  } catch(error) {
    console.error("Não foi possível pesquisar o endereço.", error);
    results.textContent = error.name === "AbortError"
      ? "A busca demorou demais. Tente novamente ou marque o destino no mapa."
      : "Busca indisponível. Tente novamente ou marque o destino no mapa.";
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
  }
}

function selectWorldwideAddress(feature) {
  const properties = feature.properties || {};
  const coordinates = feature.geometry && feature.geometry.coordinates;
  if(!Array.isArray(coordinates) || coordinates.length < 2) {
    $("worldAddressResults").textContent =
      "Este resultado não tem coordenadas. Escolha outro local.";
    return;
  }

  const longitude = Number(coordinates[0]);
  const latitude = Number(coordinates[1]);
  if(!validCoordinates(latitude, longitude)) {
    $("worldAddressResults").textContent =
      "Este resultado tem coordenadas inválidas. Escolha outro local.";
    return;
  }

  $("addressStreet").value = properties.street || properties.name || "";
  $("addressNumber").value = properties.housenumber || "";
  $("addressDistrict").value = properties.district || properties.suburb ||
    properties.neighbourhood || properties.county || "";
  $("addressCity").value = properties.city || properties.town ||
    properties.village || properties.locality || "";
  $("addressRegion").value = properties.state || properties.region || "";
  $("addressPostalCode").value = properties.postcode || "";
  $("addressCountry").value = properties.country || "";

  const savedAddressSelect = $("savedAddressSelect");
  if(savedAddressSelect) savedAddressSelect.value = "";
  setDeliveryCoordinates(latitude, longitude, true);
  $("worldAddressResults").textContent =
    "Local selecionado. Confira e complete os dados, incluindo o nome de quem recebe.";
  $("addressRecipient").focus();
}

function initializeDeliveryMap() {
  const container = $("deliveryMap");
  if(!container) return;
  initializeAddressSearch();

  if(typeof L === "undefined") {
    container.innerHTML =
      '<p class="map-error">Não foi possível carregar o mapa. Você ainda pode informar latitude e longitude manualmente.</p>';
    return;
  }

  if(deliveryMap) {
    deliveryMap.invalidateSize();
    return;
  }

  deliveryMap = L.map(container, {worldCopyJump:true}).setView([20, 0], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(deliveryMap);
  headquartersMarker = L.marker(HEADQUARTERS, {title:"Origem BlinkShop - Brasil"})
    .addTo(deliveryMap)
    .bindPopup("Origem BlinkShop - Brasil (localização demonstrativa)");

  deliveryMap.on("click", event => {
    setDeliveryCoordinates(event.latlng.lat, event.latlng.lng);
  });

  if(deliveryCoordinates) {
    setDeliveryCoordinates(deliveryCoordinates.lat, deliveryCoordinates.lng);
  }
}

function renderSavedAddresses(selectedId = null) {
  const select = $("savedAddressSelect");
  if(!select) return;

  const count = $("savedAddressCount");
  if(count) {
    count.textContent = `${addresses.length} endereço${addresses.length === 1 ? "" : "s"} salvo${addresses.length === 1 ? "" : "s"} — sem limite fixo`;
  }

  select.innerHTML = '<option value="">Novo endereço</option>' +
    addresses.map(address => `
      <option value="${safe(address.id)}">
        ${safe(address.label || address.recipient)} — ${safe(address.city)}, ${safe(address.country)}
      </option>
    `).join("");

  const preferredId = selectedId === null
    ? (addresses.length ? addresses[0].id : "")
    : selectedId;
  select.value = String(preferredId);
}

function useSavedAddress(id) {
  const address = addresses.find(item => String(item.id) === String(id));
  if(!address) {
    newAddress();
    return;
  }

  $("addressRecipient").value = address.recipient || "";
  $("addressLabel").value = address.label || "";
  $("addressStreet").value = address.street || "";
  $("addressNumber").value = address.number || "";
  $("addressComplement").value = address.complement || "";
  $("addressDistrict").value = address.district || "";
  $("addressCity").value = address.city || "";
  $("addressRegion").value = address.region || "";
  $("addressPostalCode").value = address.postalCode || "";
  $("addressCountry").value = address.country || "";
  setDeliveryCoordinates(Number(address.lat), Number(address.lng), true);
}

function newAddress() {
  const select = $("savedAddressSelect");
  if(select) select.value = "";

  [
    "addressRecipient","addressLabel","addressStreet","addressNumber",
    "addressComplement","addressDistrict","addressCity","addressRegion",
    "addressPostalCode","addressCountry","addressLatitude","addressLongitude"
  ].forEach(id => {
    const field = $(id);
    if(field) field.value = "";
  });

  deliveryCoordinates = null;
  clearDeliveryMarker();
  const coordinateHint = $("addressCoordinates");
  if(coordinateHint) {
    coordinateHint.textContent =
      "Selecione o destino no mapa ou informe as coordenadas.";
  }
}

function readAddressForm() {
  const latitude = $("addressLatitude").value.trim();
  const longitude = $("addressLongitude").value.trim();
  const address = {
    recipient:$("addressRecipient").value.trim(),
    label:$("addressLabel").value.trim(),
    street:$("addressStreet").value.trim(),
    number:$("addressNumber").value.trim(),
    complement:$("addressComplement").value.trim(),
    district:$("addressDistrict").value.trim(),
    city:$("addressCity").value.trim(),
    region:$("addressRegion").value.trim(),
    postalCode:$("addressPostalCode").value.trim(),
    country:$("addressCountry").value.trim(),
    lat:Number(latitude),
    lng:Number(longitude)
  };

  const required = [
    address.recipient,address.street,address.number,address.district,
    address.city,address.region,address.postalCode,address.country
  ];

  if(required.some(value => !value) || !latitude || !longitude ||
    !validCoordinates(address.lat, address.lng)) {
    return null;
  }

  return address;
}

function storeAddress(address, selectedId = "") {
  const existing = addresses.find(item => String(item.id) === String(selectedId));
  if(existing) {
    Object.assign(existing, address);
    save();
    return existing;
  }

  address.id = Date.now() + Math.random();
  addresses.unshift(address);
  save();
  return address;
}

function saveAddress() {
  const address = readAddressForm();
  if(!address) {
    toast("Preencha os dados obrigatórios e marque o destino no mapa.");
    return;
  }

  const saved = storeAddress(address, $("savedAddressSelect").value);
  renderSavedAddresses(saved.id);
  toast("Endereço salvo neste navegador.");
}

function changeQty(id, size, amount) {
  const item = cart.find(x => sameLine(x, id, size));
  if(!item) return;

  item.qty += amount;

  if(item.qty <= 0) {
    cart = cart.filter(x => x !== item);
  }

  save();
  renderCart();
}

function applyCoupon() {
  const code = $("coupon").value.trim().toUpperCase();

  const coupons = {
    BEMVINDO10:0.10,
    BLINK20:0.20
  };

  if(coupons[code] !== undefined) {
    couponRate = coupons[code];
    $("couponMessage").textContent =
      `Cupom aplicado: ${couponRate * 100}% de desconto!`;
    toast("Cupom aplicado! 🎉");
  } else {
    couponRate = 0;
    $("couponMessage").textContent = "Cupom inválido.";
  }

  renderCart();
}

function checkout() {
  if(!cart.length) {
    toast("Seu carrinho está vazio.");
    return;
  }

  const addressValues = readAddressForm();
  if(!addressValues) {
    toast("Preencha os dados obrigatórios e marque o destino no mapa.");
    return;
  }

  const address = storeAddress(addressValues, $("savedAddressSelect").value);
  renderSavedAddresses(address.id);

  const total = cartSubtotal() * (1 - couponRate);
  const id = Date.now();
  const createdAt = new Date();

  const items = cart.map(i => {
    const p = products.find(x => x.id === i.id);
    return p ? {name:p.name, size:i.size, qty:i.qty} : null;
  }).filter(Boolean);

  orders.unshift({
    id,
    date:createdAt.toLocaleString("pt-BR"),
    total,
    status:TRACKING_STEPS[0],
    items,
    address:{...address},
    trackingStep:0,
    trackingHistory:[{
      status:TRACKING_STEPS[0],
      date:createdAt.toLocaleString("pt-BR")
    }]
  });

  cart = [];
  couponRate = 0;
  activeTrackingOrderId = String(id);

  addNotification(
    "Pedido confirmado",
    `Seu pedido #${id} foi registrado na demonstração.`
  );

  save();
  updateCount();
  toast("Pedido registrado com sucesso!");
  showPage("orders");
}

function getTrackingStep(order) {
  if(!Number.isInteger(order.trackingStep)) return 0;
  return Math.max(0, Math.min(order.trackingStep, TRACKING_STEPS.length - 1));
}

function destroyTrackingMap() {
  if(trackingMap) {
    trackingMap.remove();
    trackingMap = null;
  }
}

function initializeTrackingMap(order, step) {
  const container = $("orderTrackingMap");
  if(!container) return;

  if(typeof L === "undefined") {
    container.innerHTML =
      '<p class="map-error">O mapa não carregou. Verifique sua conexão para visualizar a rota.</p>';
    return;
  }

  const destination = [Number(order.address.lat), Number(order.address.lng)];
  trackingMap = L.map(container, {scrollWheelZoom:false, worldCopyJump:true});
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(trackingMap);
  L.polyline([HEADQUARTERS, destination], {
    color:"#ff4d5a",
    weight:4,
    dashArray:"8 8"
  }).addTo(trackingMap);
  L.marker(HEADQUARTERS, {title:"Origem BlinkShop - Brasil"})
    .addTo(trackingMap)
    .bindPopup("Origem BlinkShop - Brasil (localização demonstrativa)");
  L.marker(destination, {title:"Destino da entrega"})
    .addTo(trackingMap)
    .bindPopup("Destino da entrega");

  const progress = step / (TRACKING_STEPS.length - 1);
  const currentPosition = [
    HEADQUARTERS[0] + (destination[0] - HEADQUARTERS[0]) * progress,
    HEADQUARTERS[1] + (destination[1] - HEADQUARTERS[1]) * progress
  ];
  L.circleMarker(currentPosition, {
    radius:9,
    color:"#fff",
    weight:2,
    fillColor:"#38d9a2",
    fillOpacity:1
  }).addTo(trackingMap).bindPopup(TRACKING_STEPS[step]);

  trackingMap.fitBounds([HEADQUARTERS, destination], {
    padding:[30,30],
    maxZoom:5
  });
}

function showOrderTracking(orderId) {
  const order = orders.find(item => String(item.id) === String(orderId));
  if(!order) {
    toast("Pedido não encontrado.");
    return;
  }

  activeTrackingOrderId = String(order.id);
  destroyTrackingMap();

  const step = getTrackingStep(order);
  const address = order.address;
  const hasDestination = address &&
    validCoordinates(Number(address.lat), Number(address.lng));
  const addressText = address
    ? `${address.street} ${address.number}, ${address.city}, ${address.country}`
    : "Endereço não disponível para este pedido.";

  $("trackingContent").innerHTML = `
    <div class="panel tracking-panel">
      <span class="eyebrow">RASTREAMENTO DEMONSTRATIVO</span>
      <h3>Pedido #${safe(order.id)} — ${safe(order.status || TRACKING_STEPS[step])}</h3>
      <p class="muted">${safe(addressText)}</p>
      ${hasDestination
        ? '<div id="orderTrackingMap" class="tracking-map" aria-label="Mapa da rota do pedido"></div>'
        : '<div class="notice">Este pedido antigo não possui endereço e coordenadas salvos, então não é possível exibir a rota.</div>'}
      <ol class="tracking-steps">
        ${TRACKING_STEPS.map((status, index) => `
          <li class="tracking-stage ${index <= step ? "done" : ""} ${index === step ? "current" : ""}">
            ${index + 1}. ${safe(status)}
          </li>
        `).join("")}
      </ol>
      <div class="tracking-actions">
        ${hasDestination && step < TRACKING_STEPS.length - 1
          ? `<button class="primary" onclick="advanceTracking('${safe(order.id)}')">Avançar etapa (simulação)</button>`
          : ""}
        <p class="muted">O status é simulado neste navegador e não consulta transportadoras.</p>
      </div>
    </div>
  `;

  if(hasDestination) initializeTrackingMap(order, step);
}

function advanceTracking(orderId) {
  const order = orders.find(item => String(item.id) === String(orderId));
  if(!order || !order.address) {
    toast("Este pedido não possui dados de rastreamento.");
    return;
  }

  const step = getTrackingStep(order);
  if(step >= TRACKING_STEPS.length - 1) {
    toast("Este pedido já foi entregue.");
    return;
  }

  order.trackingStep = step + 1;
  order.status = TRACKING_STEPS[order.trackingStep];
  order.trackingHistory = Array.isArray(order.trackingHistory)
    ? order.trackingHistory
    : [];
  order.trackingHistory.push({
    status:order.status,
    date:new Date().toLocaleString("pt-BR")
  });

  save();
  renderOrders();
  showOrderTracking(order.id);
  toast("Etapa de rastreamento atualizada.");
}

function renderOrders() {
  $("orderList").innerHTML = orders.map(order => `
    <div class="line">
      <span>
        <b>Pedido #${order.id}</b><br>
        <small class="muted">${safe(order.date)}</small>
        <span class="order-items">
          ${(order.items || []).map(i =>
            `${i.qty}× ${safe(i.name)}${i.size ? ` (tamanho ${safe(i.size)})` : ""}`
          ).join("<br>")}
        </span>
      </span>
      <span class="order-actions">
        <span>
        <b>${money(order.total)}</b><br>
        <small style="color:var(--green)">${safe(order.status || TRACKING_STEPS[getTrackingStep(order)])}</small>
        ${order.address ? `<br><small class="muted">${safe(order.address.city)}, ${safe(order.address.country)}</small>` : ""}
        </span>
        <button class="small-btn" onclick="showOrderTracking('${safe(order.id)}')">Acompanhar</button>
      </span>
    </div>
  `).join("") || '<div class="empty">Nenhuma compra realizada.</div>';
}

function saveProduct() {
  const name = $("productName").value.trim();
  const price = Number($("productPrice").value);
  const emoji = $("productEmoji").value.trim() || "🛍️";
  const cat = $("productCategory").value.trim() || "Outros";
  const description = $("productDescription").value.trim();

  if(!name || !Number.isFinite(price) || price <= 0) {
    toast("Preencha nome e preço corretamente.");
    return;
  }

  if(editingId !== null) {
    const product = products.find(p => p.id === editingId);

    if(product) {
      Object.assign(product,{name,price,emoji,cat,description});
    }
  } else {
    products.push({
      id:Date.now(),
      name,price,emoji,cat,description,rating:5
    });

    addNotification("Novo produto",`${name} foi adicionado ao catálogo.`);
  }

  save();
  resetProductForm();
  renderCategories();
  renderProducts();
  renderAdmin();
  toast("Produto salvo!");
}

function editProduct(id) {
  const p = products.find(x => x.id === id);
  if(!p) return;

  editingId = id;

  $("productName").value = p.name;
  $("productPrice").value = p.price;
  $("productEmoji").value = p.emoji;
  $("productCategory").value = p.cat;
  $("productDescription").value = p.description || "";
  $("formTitle").textContent = "Editar produto";

  window.scrollTo({top:0,behavior:"smooth"});
}

function resetProductForm() {
  editingId = null;

  ["productName","productPrice","productEmoji","productCategory","productDescription"]
    .forEach(id => $(id).value = "");

  $("formTitle").textContent = "Adicionar produto";
}

function deleteProduct(id) {
  if(!confirm("Deseja remover este produto?")) return;

  products = products.filter(p => p.id !== id);
  favorites = favorites.filter(x => x !== id);
  cart = cart.filter(x => x.id !== id);

  save();
  renderCategories();
  renderProducts();
  renderAdmin();
  updateCount();
  toast("Produto removido.");
}

function renderAdmin() {
  $("statProducts").textContent = products.length;
  $("statOrders").textContent = orders.length;
  $("statFavorites").textContent = favorites.length;

  $("adminProducts").innerHTML = products.map(p => `
    <div class="line">
      <span>${safe(p.emoji)} <b>${safe(p.name)}</b><br>
        <small class="muted">${money(p.price)}</small>
      </span>
      <span>
        <button class="small-btn" onclick="editProduct(${p.id})">Editar</button>
        <button class="small-btn danger" onclick="deleteProduct(${p.id})">Excluir</button>
      </span>
    </div>
  `).join("") || '<div class="empty">Nenhum produto cadastrado.</div>';
}

function addNotification(title,text) {
  notifications.unshift({
    id:Date.now() + Math.random(),
    title,text,
    date:new Date().toLocaleString("pt-BR"),
    read:false
  });

  save();
  updateNotificationCount();
}

function updateNotificationCount() {
  $("notificationCount").textContent =
    notifications.filter(n => !n.read).length;
}

function renderNotifications() {
  $("notificationList").innerHTML = notifications.map(n => `
    <div class="line">
      <span>
        <b>${n.read ? "" : "🔴 "}${safe(n.title)}</b><br>
        <small>${safe(n.text)}</small><br>
        <small class="muted">${safe(n.date)}</small>
      </span>
      <button class="small-btn" onclick="readNotification('${n.id}')">
        ${n.read ? "Lida" : "Marcar lida"}
      </button>
    </div>
  `).join("") || '<div class="empty">Nenhuma notificação.</div>';

  updateNotificationCount();
}

function readNotification(id) {
  const n = notifications.find(x => String(x.id) === String(id));
  if(n) n.read = true;

  save();
  renderNotifications();
}

function markAllRead() {
  notifications.forEach(n => n.read = true);
  save();
  renderNotifications();
}

function clearNotifications() {
  notifications = [];
  save();
  renderNotifications();
}

function renderChat() {
  $("chatContacts").innerHTML = Object.keys(chats).map(name => `
    <button class="chat-contact ${activeChat === name ? "active" : ""}"
      onclick="selectChat('${safe(name)}')">
      💬 ${safe(name)}
    </button>
  `).join("");

  $("chatTitle").textContent = activeChat;

  $("chatMessages").innerHTML = (chats[activeChat] || []).map(m => `
    <div class="message ${m.mine ? "mine" : ""}">
      ${safe(m.text)}
      <br><small class="muted">${safe(m.date)}</small>
    </div>
  `).join("");

  $("chatMessages").scrollTop = $("chatMessages").scrollHeight;
}

function selectChat(name) {
  activeChat = name;
  renderChat();
}

function sendMessage() {
  const text = $("chatInput").value.trim();
  if(!text) return;

  chats[activeChat].push({
    text,
    mine:true,
    date:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})
  });

  $("chatInput").value = "";
  save();
  renderChat();
}

$("search").addEventListener("input",renderProducts);

$("chatInput").addEventListener("keydown",event => {
  if(event.key === "Enter") sendMessage();
});

save();
renderCategories();
renderProducts();
updateCount();
updateNotificationCount();
