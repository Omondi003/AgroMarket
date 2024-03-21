var express = require('express');
var router = express.Router();

// LANDING PAGE OF THE APPLICATION

router.get('/', (req,res)=>{
    res.send("PROJECT INITIALIZATION");
})


module.exports=router;