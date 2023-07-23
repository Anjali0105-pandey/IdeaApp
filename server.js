const express= require('express');//to use any dependencies we use require method

const serverConfig=require('./configs/server.config')//represents current location
const app=express();//when server is contacted it comes to app to get details

app.listen(serverConfig.PORT,()=>{//hey server you start listening to port 3333
    console.log(`server started on the port number ${serverConfig.PORT}`);
})