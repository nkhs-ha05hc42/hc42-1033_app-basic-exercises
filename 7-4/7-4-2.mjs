const viewNumber = () => { 
  console.log("end", new Date()) 
} 
 
const callbackFunc = (callbackFunc) => { 
  setTimeout(() => { 
    callbackFunc() 
  }, 2000) 
} 

console.log("start", new Date()) 
setTimeout(() => { 
  console.log("★", new Date()) 
}, 2000) 
setTimeout(() => { 
    console.log("◆", new Date())
    callbackFunc(viewNumber)  
}, 3000) 