const cart = [];
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCart');
const continueShoppingBtn = document.getElementById('continueShopping');
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name; 
    const price = parseFloat(button.dataset.price);
    addToCart(name, price); 
  });
});
clearCartBtn.addEventListener('click', clearCart);
continueShoppingBtn.addEventListener('click', () => cartModal.classList.add('hidden'));
function addToCart(name, price) {
  cart.push({ name, price }); 
  updateCart();
  cartModal.classList.remove('hidden'); 
}
function updateCart() {
  cartItems.innerHTML = ''; 
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Eliminar';
    removeBtn.addEventListener('click', () => removeItem(index));
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
function clearCart() {
  cart.length = 0;
  updateCart();
}
