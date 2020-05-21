'use strict';

const constants = require(rootDir +'/utils/constants')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgencySchema = new mongoose.Schema ({
    agencyId: Number,
    email_id: String,
    name: String,
    address1: String,
    address2: String,
    state: String,
    city:String,
    phoneNumber: Number, 
    clients :[
        {type:mongoose.Schema.Types.ObjectId,ref:'client'}
    ]
    
    
},{
        timestamps:true
    });

module.exports = mongoose.model('agency', AgencySchema);


