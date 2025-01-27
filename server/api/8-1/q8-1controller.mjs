const postSample1 = (req, res) => { 
    console.log(req.body)
    res.send(JSON.stringify({ 
        status: "OK" , 
        postcode: "059-0012" 
    })) 
} 

const getSample1 = (req, res) => { 
    res.send( 
        JSON.stringify({ 
            code: req.query.code, 
            name: "情報太郎", 
        }), 
    ) 
}

const putSample1 = (req, res) => { 
    console.log(req.body) 
    res.send(JSON.stringify({ 
        status: "OK" , 
        postcode: "059-0012" 
    })) 
}

const deleteSample1 = (req, res) => { 
    res.send(JSON.stringify({ 
        status: "OK" , 
        code: req.query.code,  
    }))
} 



export const q81Controller = { 
    postSample1, 
    getSample1, 
    putSample1,
    deleteSample1,

} 