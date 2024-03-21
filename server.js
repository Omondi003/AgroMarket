const express=require('express')
 

const app=express()




let index = require('./routes/index');
app.use('/', index);


app.listen(3000, ()=> {
   console.log("App is running at port 3000")
})