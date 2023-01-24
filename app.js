const express =require('express');
const app = express();
const port = 5000;


app.get('/',(req,res)=>{
    return res.status(200).json({Msg:"Hello Ninja"});
});



app.listen(port,()=>{
    console.log('server started');
});