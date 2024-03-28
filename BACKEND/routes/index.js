var express = require('express');
var router = express.Router();
const FarmerData=require('../models/Farmer')
const RetailerData=require('../models/retailer')
const GoodsData=require('../models/goods')
const paymentData=require('../models/payment')


router.use(express.urlencoded({ extended: true})); //Allows us to get request body


// LANDING PAGE OF THE APPLICATION

router.get('/', (req,res)=>{
    // res.send("PROJECT INITIALIZATION");
    res.sendFile('mainPage.jsx')
})

// REGISTRATION PAGE FOR THE APPLICATION

router.get('/register', (req,res)=> {
    res.sendFile('/registers/farmer.jsx')
})

// LOGIN PAGE FOR THE APPLICATION

router.get('/login', (req,res)=>{
    res.sendFile('/registers/login.jsx')
})

// PAGE FOR FARMER TO ADD GOODS
router.get('/goods',(req,res)=>{
    res.sendFile('registers/goods.jsx')
})

router.get('/payment',(req,res)=>{
    res.sendFile('payment.jsx')
})



// SAVING THE FARMER DATA TO THE DATABASE
router.post('/Fdata', (req,res)=>{

    let data =new FarmerData(req.body) //FarmerData  is schema

    data.save()
       .then((result)=>{
         res.redirect('/login')
         console.log(result)

       })
       .catch((err)=>{
        console.log(err)
       })

 
 })

//  SAVING RETAILER DATA TO THE DATABASE
router.post('Rdata',(req,res)=>{
    let data=new RetailerData(req.body) //RetailerData is a schema

    data.save()
      .then((result)=>{
         res.redirect('login')
         console.log(result)
      })
   .catch(err=> console.log(err))
})


module.exports=router;