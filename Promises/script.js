const resolveBtn = document.querySelector(".resolve-btn")
const rejectBtn = document.querySelector(".reject-btn")
const p = new Promise((res,rej)=>{
   resolveBtn.addEventListener('click',()=>{
    res("Promise has been resolve.")
   })
   rejectBtn.addEventListener('click',()=>{
    rej("Promise has been reject.")
   })
}).then((message)=>{
    console.log("Pass:",message);
}).catch((err)=>{
    console.log("Reject:",err);
    
})