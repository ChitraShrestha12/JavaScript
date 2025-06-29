const appContainer = document.querySelector(".app-container");
const fetchBtn = document.querySelector("button");
const img = document.createElement("img")
fetchBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      img.src = data.message
      appContainer.appendChild(img)
    });
});
