const promiseSetTimeout = (timeout) => 
  new Promise((resolve) => { 
    setTimeout(() => resolve(), timeout) 
  }) 
 
const func1 = () => { 
  return Promise.resolve("Test1")
} 
const func2 = () => { 
  return Promise.resolve("Test2")
} 
 
const func3 = async () => { 
  Promise.all([func1(), func2()]).then(([result1, result2]) => 
    console.log(result1, result2, new Date()) 
  ) 
} 
 
console.log("start", new Date())
func1()
func2()
func3() 
console.log("end", new Date())