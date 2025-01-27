const getSample1 = (req, res) => {  
    const map1 = new Map()
    map1.set("apple","りんご")
    map1.set("lemon","レモン")
    map1.set("grape","ぶどう")

    let m1 = Array.from(map1, ([en, ja]) => ({ en, ja }));
    //m1 = Object.fromEntries(m1.entries()) 
    res.send(m1)
}

const getSample2 = (req, res) => {  
    const map1 = new Map()
    map1.set("apple","りんご")
    map1.set("lemon","レモン")
    map1.set("grape","ぶどう")
    let m1 = Array.from(map1, ([en, ja]) => ({ en, ja }));
    
    if(req.params.id == m1[1].en){
        res.send(m1[1])
    }
    else{
        res.send( 
            JSON.stringify({ 
                status : "error",
                en: req.params.id, 
                cause: "not found code!", 
            }),
        )
    }
}


export const q83Controller = {  
    getSample1, 
    getSample2,
}
