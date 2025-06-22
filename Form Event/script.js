// const userName = document.querySelector("#username")
// const h2 = document.createElement("h1")
// const body = document.querySelector("body")

// body.appendChild(h2)
// userName.addEventListener('input',(e)=>{
//     h2.innerText = e.target.value
// })

const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formData = new FormData(form)
    const userData = {}
    for (const [key,value] of formData.entries()) {
        userData[key] = value
      }
      console.log(userData);
      
})