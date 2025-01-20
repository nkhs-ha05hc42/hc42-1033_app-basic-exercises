const func1 = () => {
  return Promise.resolve("Test1")
} 
const func2 = () => { 
  return Promise.resolve("Test2")
} 

const func3 = async () => { 
  const [a , b] = await Promise.all([func1(), func2()])
  console.log(a, b, new Date()) 
} 

console.log("start", new Date()) 
func3() 
console.log("end", new Date())