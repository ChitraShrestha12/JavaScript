const addCard = document.querySelector(".add-card");
const minusCard = document.querySelector(".minus-card");
const containerCard = document.querySelector(".container");
let cardNum = 1;

addCard.addEventListener("click", function () {
  const newCard = document.createElement("div")
  newCard.classList.add("card")
  newCard.innerText = cardNum;
  cardNum++;
  containerCard.append(newCard);
  console.log("Add Card");
});

minusCard.addEventListener("click", function () {
  const card = document.querySelector(".card:last-child");
  card.remove();
  cardNum--;
});
