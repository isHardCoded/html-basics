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
                <h4 class="pizza-name">${pizza.name}</h4>
                <p><span class="pizza-type">${pizza.type}</span> тесто, <span class="pizza-size">${pizza.size}</span></p>
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

  const pizzaBlock = li.querySelector('.cart-item-block')
  const subtractQuantityButtons = pizzaBlock.querySelectorAll('.quantity-remove')
  const addQuantityButtons = pizzaBlock.querySelectorAll('.quantity-add')
  
  subtractQuantityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = pizzaBlock.querySelector('.pizza-name').textContent
      const quantityValue = pizzaBlock.querySelector('.quantity-value')
      const priceValue = pizzaBlock.querySelector('.cart-item-price')

      let savedPizzas = JSON.parse(localStorage.getItem("pizzas") || "[]")

       const existingPizzaIndex = savedPizzas.findIndex((pizza) => {
        return pizza.name === name
      })
      
      if (existingPizzaIndex !== -1) {
        const currentPizza = savedPizzas[existingPizzaIndex]
        if (currentPizza.quantity > 1) {
          currentPizza.quantity -= 1
          quantityValue.textContent = currentPizza.quantity

          currentPizza.price -= currentPizza.basePrice
          quantityValue.textContent = currentPizza.quantity
          priceValue.textContent = `${currentPizza.price} ₽`
        } else {
          currentPizza.quantity = 1
          quantityValue.textContent = 1
        }
      }
      localStorage.setItem("pizzas", JSON.stringify(savedPizzas))
    })
  })

  addQuantityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = pizzaBlock.querySelector('.pizza-name').textContent
      const quantityValue = pizzaBlock.querySelector('.quantity-value')
      const priceValue = pizzaBlock.querySelector('.cart-item-price')
      
      let savedPizzas = JSON.parse(localStorage.getItem("pizzas") || "[]")

       const existingPizzaIndex = savedPizzas.findIndex((pizza) => {
        return pizza.name === name
      })
      
      if (existingPizzaIndex !== -1) {
        const currentPizza = savedPizzas[existingPizzaIndex]
        currentPizza.quantity += 1
        currentPizza.price += currentPizza.basePrice
        quantityValue.textContent = currentPizza.quantity
        priceValue.textContent = `${currentPizza.price} ₽`
      }
      localStorage.setItem("pizzas", JSON.stringify(savedPizzas))
    })
  })
})

document.querySelector('.cart-header-clear-text').addEventListener('click', () => {
  localStorage.clear()
  window.location.reload()
})