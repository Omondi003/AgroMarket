const mongoose= require('mongoose')
const Schema= mongoose.Schema

const RetailReg= new Schema({
 
    name: {
        type: String,
        required: true
      },
    email: {
    type: String,
    required: true,
    unique: true
  },
    phone: {
    type: String,
    required: true
  },
   address: {
    type: String,
    required: true  
  },
  input_password :{
    type: String,
    required:true
},
   confirm_password :{
    type: String,
    required:true
    
}},  {timestamps:true })
    
const Retailers=mongoose.model('Retailers', RetailReg)

module.exports= Retailers;