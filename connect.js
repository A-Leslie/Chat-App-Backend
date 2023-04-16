const mongoose = require('mongoose');
require('dotenv').config()
var mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@cluster0.ggnf1l5.mongodb.net/mernchat-app-user?retryWrites=true&w=majority`

const connectToMongo =  () => {
     mongoose.connect(mongoURI)
     .then( ()=>
        console.log("connected to mongo db successfully")
    )
}


module.exports = connectToMongo;