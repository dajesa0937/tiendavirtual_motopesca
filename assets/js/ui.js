function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((p) => {
    container.innerHTML += `
      <div class="product-card overflow-hidden">

        <div class="w-full h-40 md:h-48 bg-gray-100 overflow-hidden rounded-lg">
          <img src="${p.image}" loading="lazy"
               class="w-full h-full object-cover transition duration-300">
        </div>

        <div class="mt-3">
          <h3 class="font-semibold text-sm">${p.name}</h3>

          <p class="text-lg font-bold text-[#0A2540]">
            $${p.price.toLocaleString()}
          </p>

          <button onclick="addToCart(${p.id})"
            class="w-full mt-2 bg-[#FF7A00] text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Añadir al carrito
          </button>
        </div>

      </div>
    `;
  });
}

function renderCart() {
  const items = document.getElementById("cart-items");
  let total = 0;
  items.innerHTML = "";

  cart.forEach((p, i) => {
    total += p.price;
    items.innerHTML += `
      <div class="flex justify-between mb-2">
        <span>${p.name}</span>
        <button onclick="removeItem(${i})">❌</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;

  let msg = "Hola quiero comprar:\n";
  cart.forEach((p) => (msg += "- " + p.name + "\n"));

  document.getElementById("checkout-btn").href =
    "https://wa.me/573108394870?text=" + encodeURIComponent(msg);
}
container.innerHTML += `
  <div class="product-card">

    <div class="product-image-container">
      <img src="${p.image}" loading="lazy">
    </div>

    <div class="mt-3">
      <h3 class="font-semibold text-sm">${p.name}</h3>

      <p class="text-lg font-bold text-[#0A2540]">
        $${p.price.toLocaleString()}
      </p>

      <button onclick="addToCart(${p.id})"
        class="w-full mt-2 bg-[#FF7A00] text-white py-2 rounded-lg">
        Añadir al carrito
      </button>
    </div>

  </div>
`;
