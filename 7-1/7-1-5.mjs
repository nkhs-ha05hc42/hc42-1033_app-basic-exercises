const dat1 = new Map()

const set = (ja , en) =>{
    dat1.set("ja :", ja)
    dat1.set("en :", en)
    return dat1
}

const dat2 = set("りんご" , "apple")
for (const [key, value] of dat2) {
    console.log(key, value)
}