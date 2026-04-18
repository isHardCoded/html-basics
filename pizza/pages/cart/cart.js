const pizzas = localStorage.getItem("pizzas")
const parsedPizzas = JSON.parse(pizzas)

parsedPizzas.forEach(pizza => {
  const li = document.createElement('li')
  li.classList.add('cart-item')

  li.innerHTML = `
    <div class="cart-item-block">
            <div class="block-info">
              <img class="block-info-img" src="${pizza.imageUrl}" alt="">
              <div class="block-info-text">
                <h4>${pizza.name}</h4>
                <p>${pizza.type} тесто, ${pizza.size}</p>
              </div>
            </div>
            <div class="block-quantity">
              <button class="quantity-remove">
                <img src="../../public/icons/cart/remove.svg" alt="">
              </button>
              <span class="quantity-value">${pizza.quantity}</span>
              <button class="quantity-add">
                <img src="../../public/icons/cart/add.svg" alt="">
              </button>
            </div>
            <p class="cart-item-price">${pizza.price} ₽</p>
            <button class="cart-item-delete">
              <img src="../../public/icons/cart/clear.svg" alt="">
            </button>
          </div>
  `
  
  document.querySelector('.cart-list').appendChild(li)
})