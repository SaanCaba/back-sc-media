//Here we are going to connect with the database on mongo using mongoose!
const mongoose = require('mongoose')
const connectionsParams = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}
const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB, connectionsParams)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
        console.log('could not connect to database')
    }
}


module.exports = connect