import express from "express"
import path from "path"

import { sample1Controller } from "./api/controllers.mjs" 
import { q81Controller } from "./api/controllers.mjs"

const routers = express.Router()


routers.get("/api/sample1", sample1Controller.getSample1) 
routers.post("/api/sample1", sample1Controller.postSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1) 
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1) 


routers.get("/api/8-1", q81Controller.getSample1) 

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
