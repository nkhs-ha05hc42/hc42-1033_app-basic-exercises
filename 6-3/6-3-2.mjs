 // 全ての要素が50を超えているケース
  const numbers1 = [51, 60, 70]
  console.log(numbers1.every(value => value > 50))
  
  // 全ての要素が50を超えていないケース
  const numbers2 = [40, 50, 60]
  console.log(numbers2.every(value => value > 50))