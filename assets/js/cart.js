let cart = [];

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
