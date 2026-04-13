document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente");

  // ELEMENTOS
  const cartBtn = document.getElementById("cart-btn");
  const cart = document.getElementById("cart");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-cart");

  // VALIDACIÓN
  if (!cartBtn || !cart || !overlay) {
    console.error("Elementos del DOM no encontrados");
    return;
  }

  // ABRIR CARRITO
  cartBtn.addEventListener("click", () => {
    cart.style.transform = "translateX(0)";
    overlay.classList.remove("hidden");
  });

  // CERRAR CARRITO
  function closeCart() {
    cart.style.transform = "translateX(100%)";
    overlay.classList.add("hidden");
  }

  // BOTÓN CERRAR
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCart);
  }

  // CLICK FUERA
  overlay.addEventListener("click", closeCart);

  // TECLA ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  // 🔥 RENDER PRODUCTOS (AQUÍ ES DONDE DEBE IR)
  renderProducts();
});
