const objectArray6_5_5 = [
    {
        key: "A",
        value: "カレー",
        },
        {
        key: "B",
        value: "定食",
        }
]

const objectArray6_6_5 =  new Map(objectArray6_5_5.map(object => [object.key, object.value]))
 
for (const [key, value] of objectArray6_6_5) {
    console.log(key, value)
    }