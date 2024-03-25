const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the form schema
const RegSchema = new Schema({

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
},
}, {timestamps:true });

// Create the Form model
const Farmers = mongoose.model('Farmers', RegSchema);

module.exports = Farmers;

