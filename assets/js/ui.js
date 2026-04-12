function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((p) => {
    container.innerHTML += `
      <div class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group">

        <!-- IMAGEN -->
        <div class="relative">
          <img src="${p.image}" 
               class="w-full h-48 object-cover group-hover:scale-105 transition">

          <!-- BADGE -->
          <span class="absolute top-2 left-2 bg-[#FF7A00] text-white text-xs px-2 py-1 rounded">
            Oferta
          </span>
        </div>

        <!-- INFO -->
        <div class="p-4">
          <h3 class="font-semibold text-sm mb-1">${p.name}</h3>

          <p class="text-lg font-bold text-[#0A2540]">
            $${p.price.toLocaleString()}
          </p>

          <button onclick="addToCart(${p.id})"
            class="w-full mt-3 bg-[#FF7A00] text-white py-2 rounded-lg hover:opacity-90">
            Añadir al carrito
          </button>
        </div>

      </div>
    `;
  });
}
