# JavaScript Promises – Learning Project

This project is about learning and understanding **JavaScript Promises** in a simple way using button clicks.

## 📘 What is a Promise?

A **Promise** in JavaScript is used to handle things that happen **later**, like data coming from a server or waiting for a user action.

It has 3 states:

- ⏳ **Pending** – Still waiting.
- ✅ **Resolved** – It worked!
- ❌ **Rejected** – It failed.

## 💡 What I Learned

- How to create a Promise.
- How to resolve or reject a Promise using button clicks.
- How to use `.then()` and `.catch()` to handle the result.

## 🔧 How It Works

There are two buttons:

- **Resolve** – When clicked, the Promise is resolved.
- **Reject** – When clicked, the Promise is rejected.

### 📋 Example Code (JavaScript)

```javascript
const resolveBtn = document.querySelector(".resolve-btn");
const rejectBtn = document.querySelector(".reject-btn");

const p = new Promise((res, rej) => {
  resolveBtn.addEventListener('click', () => {
    res("Promise has been resolved.");
  });

  rejectBtn.addEventListener('click', () => {
    rej("Promise has been rejected.");
  });
});

p.then((message) => {
  console.log("Pass:", message);
}).catch((err) => {
  console.log("Reject:", err);
});
