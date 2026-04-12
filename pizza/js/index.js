const pizzas = [
  {
    id: 1,
    name: 'Чизбургер-пицца',
    type: {
      thin: 'тонкое',
      traditional: 'традиционное'
    },
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
    type: {
      thin: 'тонкое',
      traditional: 'традиционное'
    },
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
    type: {
      thin: 'тонкое',
      traditional: 'традиционное'
    },
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
    type: {
      thin: 'тонкое',
      traditional: 'традиционное'
    },
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
    type: {
      thin: 'тонкое',
      traditional: 'традиционное'
    },
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
    type: {
      thin: 'тонкое',
      traditional: 'традиционное'
    },
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

filters.forEach((filter) => {
  const button = document.createElement('button')
  button.className = 'filter'
  button.textContent = filter.label

  if (filter.id == 'all') {
    button.classList.add('active')
  }

  filtersContainer.appendChild(button)
})

const filterButtons = document.querySelectorAll('.filter')

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    filterButtons.forEach((button) => button.classList.remove('active'))
    e.target.classList.add('active')
  })
})