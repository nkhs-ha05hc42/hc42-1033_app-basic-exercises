const promiseSetTimeout = (timeout) => 
    new Promise((resolve) => { 
      setTimeout(() => { 
        // この例では処理が完了したことを返すだけなのでresolveには値を渡さない 
        resolve() 
      }, timeout) 
    }) 

const promiseA = (time , str) =>{
    promiseSetTimeout(10000) 
    .then(() => { 
        console.log("★", new Date()) 
    })
}

const promiseB = (time , str) =>{
    promiseSetTimeout(20000) 
    .then(() => { 
        console.log("◆", new Date()) 
    })
}

console.log("start", new Date()) 
promiseA()
promiseB()
console.log("end", new Date()) 