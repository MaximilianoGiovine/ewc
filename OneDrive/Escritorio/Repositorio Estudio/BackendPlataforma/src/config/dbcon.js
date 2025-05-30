const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://GiovineMaxi:gwID2RmNrK1iscA7@basededatos.laxnihf.mongodb.net/')
        .then(() => console.log("MongoDB connected successfully"))
        .catch(err => console.error("MongoDB connection error:", err));
};
module.exports = connectDB;
