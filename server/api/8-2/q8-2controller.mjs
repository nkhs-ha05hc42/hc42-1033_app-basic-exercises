const postSample1 = (req, res) => { 
    if(req.body.code != "HC42-9821"){
        console.log(req.body)
        res.send(
            JSON.stringify({ 
                status: "OK" , 
                postcode: "059-0012" 
            })
        )
    }
    else{
        res.send( 
            JSON.stringify({ 
                status : "error",
                code: req.query.code, 
                cause: "code already exists!" , 
            }),
        )
    }
} 

const getSample1 = (req, res) => {  
    const A1 = [
        {
        key: "code",
        value: "HC42-9821",
        },
        {
        key: "name",
        value: "情報太郎",
        }
    ]
    if(A1[0].value == req.query.code){
        res.send( 
            JSON.stringify({ 
                code: req.query.code, 
                name: "情報太郎", 
            }), 
        )
    } 
    else{
        res.send( 
            JSON.stringify({ 
                status : "error",
                code: req.query.code, 
                cause: "not found code!", 
            }),
        ) 
    }   
}

const putSample1 = (req, res) => { 
    const A2 = [
        {
        key: "code",
        value: "HC42-9820",
        },
        {
        key: "postcode",
        value: "000-0000",
        },
        {
        key: "address",
        value: "aaaaa",
        }
    ]

    if(req.body.code != "HC42-9823"){
        res.send( 
            JSON.stringify({ 
                status : "error",
                code: req.query.code, 
                cause: "not found code!", 
            }),
        )
    }
    else{
        console.log(req.body.code)
        if(req.body.postcode != A2[1].value){
            console.log(req.body.postcode)
        }
        if(req.body.address != A2[2].value){
            console.log(req.body.address)
        }
        res.send(JSON.stringify({ 
            status: "OK" , 
            code: "HC42-9823" 
        })) 

    }
}

const deleteSample1 = (req, res) => { 
    if(req.query.code == "HC42-9824"){
        res.send(JSON.stringify({ 
            status: "OK" , 
            code: req.query.code,  
        }))
    }
    else{
        res.send( 
            JSON.stringify({ 
                status : "error",
                code: req.query.code, 
                cause: "not found code!", 
            }),
        )
    }
} 



export const q82Controller = { 
    postSample1, 
    getSample1, 
    putSample1,
    deleteSample1, 
} 