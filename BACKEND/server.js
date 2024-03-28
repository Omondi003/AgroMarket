const express=require('express')
 

const app=express()
app.use(express.urlencoded({ extended: true})); //Allows us to get request body


let index = require('./routes/index');
app.use('/', index);


app.listen(3000, ()=> {
   console.log("App is running at port 3000")
})