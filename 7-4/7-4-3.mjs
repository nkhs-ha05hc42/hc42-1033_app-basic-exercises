const end = () => { 
  console.log("end", new Date()) 
} 
const hisi = () => { 
  console.log("◆", new Date()) 
} 

const callbackend = (callbackFunc) => { 
  setTimeout(() => { 
    callbackFunc() 
  }, 5000) 
} 

const callbackhisi = (callbackFunc) => { 
  setTimeout(() => { 
    callbackFunc() 
  }, 3000) 
} 

console.log("start", new Date()) 
setTimeout(() => { 
  console.log("★", new Date()) 
  callbackhisi(hisi) 
  callbackend(end) 
}, 2000) 