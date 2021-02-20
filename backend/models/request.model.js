const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//make a schema for the http req from the chatbot
const park = new Schema({
    parkCodes : {parkName : String, parkCode : String}
});