const postSample1 = (req, res) => { 
    console.log(req.body) 
    res.send(JSON.stringify({ status: "success" })) 
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
    res.send(JSON.stringify({ status: "success" })) 
}

const deleteSample1 = (req, res) => { 
    res.send(JSON.stringify({ status: "success", id: req.query.id })) 
} 

const getPathParamSample1 = (req, res) => { 
    res.send( 
        JSON.stringify({ 
            id: req.query.id, 
            message: "メッセージを取得します", 
        }), 
    ) 
} 


export const q81Controller = { 
    postSample1, 
    getSample1, 
    putSample1,
    deleteSample1,
    getPathParamSample1, 
} 