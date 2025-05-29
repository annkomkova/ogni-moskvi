document.addEventListener('DOMContentLoaded', () => {
  renderProducts()
  // addToCart()
  // removeFromCart()
})

const products = [
  {
    id: 1,
    name: 'Футболка',
    price: 3500,
    image:
      'https://static.insales-cdn.com/r/FrZDXrBm7HE/rs:fit:1000:0:1/q:100/plain/images/products/1/3594/655928842/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0_%D0%B1%D0%B5%D1%82%D0%BE%D0%BD_1.jpg@jpg'
  },
  {
    id: 2,
    name: 'Пин',
    price: 1500,
    image:
      'https://rockbunker.ru/upload/iblock/879/4jjju07uvwh8qwfnocdgqogitqc83sgl.jpg'
  },
  {
    id: 3,
    name: 'Кружка',
    price: 2100,
    image: 'https://podaru.ru/assets/products/51707/6578.60_5_tif_1000x1000.jpg'
  }
]

function renderProducts() {
  const productList = document.querySelector('#product-list')
  productList.innerHTML = ''

  products.forEach((product) => {
    const quantity = getProductCount(product.id)

    const div = document.createElement('div')
    div.classList.add('product')
    div.classList.add('card')

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
     <div class='product-text'>
      <h3>${product.name}</h3>
      <p>${product.price} ₽</p>
      <div class="buttons">
        <button onclick="removeFromCart(${product.id})" data-id="${product.id}">—</button>
        <p>${quantity}</p>
        <button onclick="addToCart(${product.id})" data-id="${product.id}">+</button>
      </div>
     </div>
    `

    productList.appendChild(div)
  })
}

function getProductCount(productId) {
  const cart = getCart()
  const item = cart.find((p) => p.id === productId)

  // if (item) {
  //   return item.quantity
  // } else {
  //   return 0
  // }

  return item ? item.quantity : 0
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function addToCart(productId) {
  let cart = getCart()

  const index = cart.findIndex((p) => p.id === productId)

  if (index != -1) {
    cart[index].quantity += 1
  } else {
    const item = products.find((p) => p.id === productId)

    if (item) {
      cart.push({ ...item, quantity: 1 })
    }
  }

  setCart(cart)
}
function removeFromCart(productId) {
  let cart = getCart()

  const index = cart.findIndex((p) => p.id === productId)

  if (index != -1) {
    if (cart[index].quantity >= 1) {
      cart[index].quantity -= 1
    }
  } else {
    cart.splice(index, 0)
  }

  setCart(cart)
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCartCount()
  renderProducts()
}

function updateCartCount() {
  let cart = getCart()
  const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)

  if (count != 0) {
    document.querySelector('.cart-count').innerHTML = count
  }
}
