//1. import json server
const JSONServer = require("json-server")

//2. create server for running json file
const rBuilder = JSONServer.create()

//3. create middleware
const middleware = JSONServer.defaults()

//6. import db.json file
const router = JSONServer.router("db.json")

//4. define port to run the server
const PORT = 3000 || process.env.PORT

//5. use middlewear
rBuilder.use(middleware)

rBuilder.use(router)

rBuilder.listen(PORT,()=>{
    console.log(`Resume Builder started at PORT number ${PORT}`);
    
})