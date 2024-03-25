const mongoose= require('mongoose')
const Schema= mongoose.Schema

// SCHEMA FOR FARMER TO SAVE THE GOODS TO THE DATABASE

const goodsReg=new Schema({

    title: {
        type: String,
        required: true
      },

      description: String,

      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 0
      },
      category: String,
      image: {
        data: Buffer, // Binary image data
        contentType: String // MIME type of the image
      },
     
    }, {timestamps: true});

const goods=mongoose.model('goods',goodsReg)
module.exports=goods;