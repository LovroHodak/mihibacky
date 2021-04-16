require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/unishop', {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB unishop connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})