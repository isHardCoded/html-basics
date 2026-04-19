const pizzas = [
  {
    id: 1,
    name: 'Чизбургер-пицца',
    type: [
      {
        thin: 'тонкое', 
      },
      {
        traditional: 'традиционное'
      }
    ],
    size: {
      small: 26,
      medium: 30,
      large: 40
    },
    price: {
      small: 590,
      medium: 790,
      large: 990
    },
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif'
  },
  {
    id: 2,
    name: 'Сырная',
    type: [
      {
        thin: 'тонкое', 
      },
      {
        traditional: 'традиционное'
      }
    ],
    size: {
      small: 26,
      medium: 30,
      large: 40
    },
    price: {
      small: 490,
      medium: 690,
      large: 890
    },
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf40eb1171aabe90b1b3ce07c0c5.avif'
  },
  {
    id: 3,
    name: 'Креветки со сладким чили',
    type: [
      {
        thin: 'тонкое', 
      },
      {
        traditional: 'традиционное'
      }
    ],
    size: {
      small: 26,
      medium: 30,
      large: 40
    },
    price: {
      small: 690,
      medium: 890,
      large: 1090
    },
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf5147f27780a3290a82692e7a36.avif'
  },
  {
    id: 4,
    name: 'Карбонара',
    type: [
      {
        thin: 'тонкое', 
      },
      {
        traditional: 'традиционное'
      }
    ],
    size: {
      small: 26,
      medium: 30,
      large: 40
    },
    price: {
      small: 640,
      medium: 840,
      large: 1040
    },
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/0198bf2b03447079941f2d5ac6e986a9.avif'
  },
  {
    id: 5,
    name: 'Песто',
    type: [
      {
        thin: 'тонкое', 
      },
      {
        traditional: 'традиционное'
      }
    ],
    size: {
      small: 26,
      medium: 30,
      large: 40
    },
    price: {
      small: 580,
      medium: 780,
      large: 980
    },
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/019a8aaa69cc7601b28736b1ebe7fc25.avif'
  },
  {
    id: 6,
    name: 'Гавайская',
    type: [
      {
        thin: 'тонкое', 
      },
      {
        traditional: 'традиционное'
      }
    ],
    size: {
      small: 26,
      medium: 30,
      large: 40
    },
    price: {
      small: 620,
      medium: 820,
      large: 1020
    },
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.avif'
  },
]

const filters = [
  {
    id: 'all',
    label: 'Все'
  },
  {
    id: 'meat',
    label: 'Мясные'
  },
  {
    id: 'vegan',
    label: 'Вегетарианская'
  },
  {
    id: 'grill',
    label: 'Гриль'
  },
  {
    id: 'spicy',
    label: 'Острые'
  },
  {
    id: 'closed',
    label: 'Закрытые'
  }
]

const filtersContainer = document.querySelector('.filters')
const pizzasContainer = document.querySelector('.pizzas-list')

filters.forEach((filter) => {
  const button = document.createElement('button')
  button.className = 'filter'
  button.textContent = filter.label

  if (filter.id == 'all') {
    button.classList.add('active')
  }

  filtersContainer.appendChild(button)
})

pizzas.forEach((pizza) => {
  const li = document.createElement('li') 
  li.innerHTML = `
    <div class="pizza-block">
      <img class="pizza-image" width="260" src="${pizza.imageUrl}" alt="">
      <h4 class="pizza-name">${pizza.name}</h4>
      <div class="pizza-parameters">
        <div class="pizza-types">
          <button class="pizza-param param-active">${pizza.type[0].thin}</button>
          <button class="pizza-param">${pizza.type[1].traditional}</button>
        </div>
        <div class="pizza-sizes">
          <button class="pizza-param param-active">${pizza.size.small} см.</button>
          <button class="pizza-param">${pizza.size.medium} см.</button>
          <button class="pizza-param">${pizza.size.large} см.</button>
        </div>
      </div>
      <div class="pizza-actions">
        <p class="pizza-price">от ${pizza.price.small} ₽</p>
        <button class="pizza-add-btn">
          <img width="12" src="./public/icons/pizza/add.svg" alt="">
          <p class="pizza-add-text">Добавить</p>
          <div class="pizza-count">2</div>
        </button>
      </div>
    </div>
  `
  pizzasContainer.appendChild(li)

  const pizzaBlock = li.querySelector('.pizza-block')
  const typeButtons = pizzaBlock.querySelectorAll('.pizza-types .pizza-param')
  const sizeButtons = pizzaBlock.querySelectorAll('.pizza-sizes .pizza-param')
  const addButtons = pizzaBlock.querySelectorAll('.pizza-add-btn')
  
  typeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      typeButtons.forEach(b => b.classList.remove('param-active'))
      e.target.classList.add('param-active')
    })
  })
  
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      sizeButtons.forEach(b => b.classList.remove('param-active'))
      e.target.classList.add('param-active')
    })
  })

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = pizzaBlock.querySelector('.pizza-name').textContent
      const type = pizzaBlock.querySelector('.pizza-types .param-active').textContent
      const size = pizzaBlock.querySelector('.pizza-sizes .param-active').textContent
      const priceText = pizzaBlock.querySelector('.pizza-price').textContent
      const imageUrl = pizzaBlock.querySelector('.pizza-image').src

      const basePriceNumber = Number(priceText.replace(/[^0-9]/g, ""))
      const savedPizzas = JSON.parse(localStorage.getItem("pizzas") || "[]")

      const existingPizzaIndex = savedPizzas.findIndex(pizza => {
        return pizza.name === name
      })

      if (existingPizzaIndex !== -1) {
        const item = savedPizzas[existingPizzaIndex]
        item.quantity += 1
        item.price = item.basePrice * item.quantity

      } else {
        savedPizzas.push({
          name,
          type,
          size,
          imageUrl,
          quantity: 1,
          basePrice: basePriceNumber,
          price: basePriceNumber * 1
        })
      }

      localStorage.setItem("pizzas", JSON.stringify(savedPizzas))
    })
  })
})

const filterButtons = document.querySelectorAll('.filter')

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    filterButtons.forEach((button) => button.classList.remove('active'))
    e.target.classList.add('active')
  })
})