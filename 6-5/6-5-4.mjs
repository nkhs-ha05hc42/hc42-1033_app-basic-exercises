const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]
const array4 = [10, 11, 12]
const array5 = [13, 14, 15]
const array6 = [16, 17, 18]

for (const array of [array1, array2, array3, array4, array5, array6]) {
  for (const number of array) {
    console.log(number * 2)
  }
  console.log( )
}