const map1 = new Map()
 map1.set("A", "カレー")
 map1.set("B", "定食")

 map1.delete("A")
 
 console.log(map1.get("A"))
 console.log(map1.get("B"))