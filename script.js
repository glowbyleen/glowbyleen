function addToCart(name, image, price) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  let existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      name: name,
      image: image,
      price: price,
      quantity: 1
    });
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
  const totalDiv = document.createElement("div");
totalDiv.className = "cart-total";
totalDiv.innerHTML = "<h2>Total:  €" + totalPrice.toFixed(2) + "</h2>";
cartItemsContainer.appendChild(totalDiv);
}