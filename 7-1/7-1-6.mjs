const add = (cnt) =>{
    if(cnt > 100) return
    console.log(cnt)
    add(cnt*2)
}

add(10)
add(25)