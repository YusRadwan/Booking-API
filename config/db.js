const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected is Successfully')
    } catch (error) {
        console.log("connected is Faild", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;