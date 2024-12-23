//適当に生成AIに作らせた文章を、定数や変数に数値や文字を代入して出力する。
//実験の結果、成功率は80%でした。実験の結果、失敗率は20%です。　という文章を出力する。

let str1 = '成功率'
let num1 = 80
const str2 = '%'
let work1 = `実験の結果${str1}は${num1}${str1} です。`
console.log(work1)
str1 = '失敗率'
num1 = 20
work1 = '実験の結果' + str1 + 'は' + num1 + str1 + 'です。'
console.log(work1)