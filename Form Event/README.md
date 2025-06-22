# Form Events and FormData

This shows how to use **form events** in JavaScript.

- Learned what a **form** is and how it works.
- Used the **submit** event and stopped the page from reloading with `preventDefault()`.
- Used the **input** event to watch what you type (this part is commented out).
- Used the **FormData** method to get the form’s values easily.
- When the form is sent, the data is shown as an object in the console.

---

## Code Example

```js
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the page from reloading
  const formData = new FormData(form);
  const userData = {};

  for (const [key, value] of formData.entries()) {
    userData[key] = value; // save each form value in an object
  }

  console.log(userData); // show the data in the console
});
