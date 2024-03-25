
const mongoose = require("mongoose");

const server = '127.0.0.1:27017'; 
const database = 'Agro_Market'; 

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect(`mongodb://${server}/${database}`, {  useNewUrlParser: true, useUnifiedTopology: true})
      .then(() =>   console.log('Database connection successful'))
      .catch((err) =>  console.error('Database connection failed'))
  }
}



module.exports = new Database();