const add = (a) => { 
  console.log(a + a)
} 
const end = () => { 
  console.log("end", new Date()) 
} 

const callbackend = (callbackFunc) => { 
  setTimeout(() => { 
    callbackFunc() 
  }, 5000) 
} 

console.log("start", new Date()) 
setTimeout(() => { 
  add(3)
  console.log("end", new Date())
}, 2000) 