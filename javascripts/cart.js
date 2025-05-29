document.addEventListener('DOMContentLoaded', () => {
  renderCart()
})

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function renderCart() {
  const container = document.querySelector('#cart-items')
  const totalPrice = document.querySelector('#total-price')
  const cart = getCart()

  container.innerHTML = ''
  let total = 0

  if (!Array.isArray(cart) || cart.length == 0) {
    container.innerHTML = '<p>Корзина пуста</p>'
    totalPrice.innerHTML = ''
  }

  cart.forEach((item) => {
    const quantity = item.quantity || 0
    const itemPrice = (item.price || 0) * quantity
    total += itemPrice

    const div = document.createElement('div')
    div.classList.add('cart-item')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${item.image}" alt="" class="cart-item-image" />
        <div class="cart-item-text">
          <h3>${item.name}</h3>
          <p>${item.price} ₽</p>
        </div>
        <h4>Количество: ${quantity}</h4>
        <button onclick="removeFromCart(${item.id})">🗑</button>
    `
    container.appendChild(div)
  })

  totalPrice.innerHTML = `Итого: ${total} ₽`
}

function removeFromCart(id) {
  let cart = getCart()
  cart = cart.filter((item) => item.id !== id)
  setCart(cart)
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
  renderCart()
}
