const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/book", (err, data) => {
    if (err) {
        console.log("Failed to connect to MongoDB", err)
    } else {
        console.log("Connected to MongoDB")
    }
})