const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
    mongoose.connect("mongodb+srv://studymork:HJzvW05oAr9aCOlm@cluster0.crvplaq.mongodb.net/lmsProject").then(() => {
        console.log('Connected to the database');
    }).catch((err) => {
        console.log('Error connecting to the database', err);
        process.exit(1);    
    })
}

module.exports = connect;
