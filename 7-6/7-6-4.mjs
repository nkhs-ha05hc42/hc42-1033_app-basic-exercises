const func1 = () => {
  return Promise.resolve("Test1")
} 
const func2 = (str) => { 
  return Promise.resolve("new" + str)
} 


const promise = async() => { 
  const a = await func1()
  const b =  await func2(a) 
    console.log(b)
} 


console.log("start", new Date()) 
promise()
console.log("end", new Date()) 