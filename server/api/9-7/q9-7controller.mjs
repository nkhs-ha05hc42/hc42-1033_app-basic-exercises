import { sample2Model } from "./q9-7model.mjs" 

 const getAll = async (req, res) => { 
    const result = await sample2Model.selectAll() 
    res.send(JSON.stringify({ status: "success", list: result })) 
}

export const q97Controller = {  
  getAll,
} 