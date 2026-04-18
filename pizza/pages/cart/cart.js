const pizzas = localStorage.getItem("pizzas")
const parsedPizzas = JSON.parse(pizzas)

parsedPizzas.forEach(pizza => {
  const div = document.createElement('div')
  div.innerHTML = `
    <h2>${pizza.name}</h2>
  `
  document.querySelector('.container').appendChild(div)
})