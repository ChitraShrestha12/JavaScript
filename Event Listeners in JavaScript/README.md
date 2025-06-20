# Adding Event Listeners Project

This is a simple interactive web project that demonstrates how to add and remove elements from the DOM using JavaScript event listeners.

## ✨ Features

The page contains:
- A **"+" (add)** button to add new cards.
- A **"-" (minus)** button to remove the last added card.

Each card is displayed with a number indicating the order it was added.

---

## ⚙️ How It Works

The core logic is written in JavaScript (`script.js`) and works as follows:

### ➕ Adding Cards:
- When the **add-card** (`+`) button is clicked:
  - A new `<div>` element with the class `card` is created.
  - It is given a number (starting from 1) based on a counter (`cardNum`).
  - The new card is appended to the container on the page.
  - The counter is then incremented.

```js
addCard.addEventListener("click", function () {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = cardNum;
  cardNum++;
  containerCard.append(newCard);
});
