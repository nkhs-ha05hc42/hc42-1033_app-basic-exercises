const map1 = new Map()
 map1.set("A", "カレー")
 map1.set("B", "定食")

 map1.delete("A")

 for (const [key, value] of map1) {
    console.log(key, value)
    }