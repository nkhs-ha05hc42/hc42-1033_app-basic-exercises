import { query } from "../../db/manager.mjs" 

const selectAll = async () => { 
    const results = await query(` 
      SELECT 
        * 
      FROM 
        exams; 
    `) 
    return results.rows 
} 

 
export const sample2Model = {  
  selectAll, 
} 