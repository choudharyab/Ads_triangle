
'use strict';

const constants = require(rootDir +'/utils/constants')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new mongoose.Schema({
    clientId:Number,
    email:String ,
    name:  String,
    phoneNumber:Number,
    totalBill: Number, 
    agencyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'agency'
    },
    
},{
        timestamps:true
    });


module.exports = mongoose.model('client', ClientSchema);

