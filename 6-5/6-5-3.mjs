let sum = 0

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i
    }
    if(sum > 50 ){
        console.log("ループ回数" + i + "  合計" + sum)
        break
    }
}