const func1 = () => {
  return Promise.resolve("Test1")
} 
const func2 = (str) => { 
  return Promise.resolve("new" + str)
} 


const promise = () => { 
  func1() 
  .then((num) => func2(num)) 
  .then((result) => { 
    console.log(result)})
} 


console.log("start", new Date()) 
promise()
console.log("end", new Date()) 