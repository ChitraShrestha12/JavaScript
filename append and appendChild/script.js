const h1 = document.querySelector("h1")
const container = document.querySelector(".container")
const card = document.querySelector('.card')


for(let i =2;i<=100;i++){
  const newCard = card.cloneNode()
  newCard.innerText = i
  container.appendChild(newCard)
}
for(let i =2;i<=100;i++){
  const newCard = card.cloneNode()
  newCard.innerText = i
  container.append(newCard)
}

