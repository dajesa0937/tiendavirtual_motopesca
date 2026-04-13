function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach((p) => {
    container.innerHTML += `
      <div class="product-card overflow-hidden">

        <!-- CONTENEDOR IMAGEN -->
        <div class="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">

          <img src="${p.image}" 
               class="w-full h-full object-cover transition duration-300">

        </div>

        <!-- INFO -->
        <div class="mt-3">
          <h3 class="font-semibold text-sm mb-1">${p.name}</h3>

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
