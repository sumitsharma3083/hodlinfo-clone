const mongoose = require('mongoose')


const dbConnect = async ()=>{

    try {
        const result = await  mongoose.connect('mongodb+srv://sumit:sumit123@cluster0.x042n.mongodb.net/cryptoInfo?retryWrites=true&w=majority')
        console.log("Database Connection successfull")
    } catch (error) {
        console.log(error.message);   
    }
}


module.exports = dbConnect