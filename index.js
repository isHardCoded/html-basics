// object
let text = document.querySelector(".text")

let red = document.getElementById('red')
let blue = document.getElementById('blue')
let green = document.getElementById('green')

let buttonsToSetColor = document.getElementsByTagName('button')

for (let i = 0; i < buttonsToSetColor.length; i++) {
  buttonsToSetColor[i].addEventListener('click', function() {
    setColor(text, buttonsToSetColor[i].id)
  })
}

function setColor(element, value) {
  element.style.color = value
}

let btnToOpen = document.getElementById('open')

btnToOpen.addEventListener('click', function() {
  document.getElementById('textToOpen').style.display = 'block'
})