import { sample2Model } from "./q9-7model.mjs" 

 const getAll = async (req, res) => { 
    const result = await sample2Model.selectAll() 
    res.send(JSON.stringify({ status: "success", list: result })) 
}
const getOne = async (req, res) => { 
    const id = parseInt(req.params.id) 
    if (!id) { 
      return res.send(JSON.stringify({ status: "error" })) 
    } 
    const result = await sample2Model.selectOne(id) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
} 

const post = async (req, res) => { 
  const id = req.body.id
  const user_id = req.body.user_id
  const year = req.body.year
  const month = req.body.month 
  const day = req.body.day
  const name = req.body.name 
  const score = req.body.score 

  if (!name ) { 
    return res.send(JSON.stringify({ status: "error" })) 
  } 
  const result = await sample2Model.insertOne(id,user_id , year , month , day , name , score) 
  res.send(JSON.stringify({ status: "success", data: result })) 
}

const put = async (req, res) => { 
    const id = req.body.id
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month 
    const day = req.body.day
    const name = req.body.name 
    const score = req.body.score 
 
    const result = await sample2Model.updateOne(id , user_id , year , month , day , name , score) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
}

const delete1 = async (req, res) => { 
    const id = req.params.id 
    if (!id) { 
      return res.send(JSON.stringify({ status: "error" })) 
    } 
    const result = await sample2Model.deleteOne(id) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
}
export const q97Controller = {  
  getAll,
  getOne,
  post,
  put,
  delete1,
} 