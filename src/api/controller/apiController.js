'use strict';
const {
    response,
    constants,
    mongoDB,
    jwtAuth
} = require(`${rootDir}/utils`);
const helpers = require("../helpers");
const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';



const createAgency = async (req ,res) => {
    try {
        let agency = await helpers.agencyData(req.body);
        let newagency = await agency.save();
        
        for(let i=0;i<req.body.client.length;i++){
            let client = await helpers.clientData(req.body.client[i],newagency._id);
            let newclient = await client.save();
        }

        response.success(res, constants.SUCCESS_200.STATUS, "Data saved Successfully");

    } catch (error) {
        let status = error.status? error.status: constants.ERROR_500.STATUS,
            message = error.message? error.message: constants.ERROR_500.MESSAGE;
        response.failed(res,status,message);
    }    

}


const getClientByAgencyId = async(req,res) => {
    try {
        let id  = req.params.id;
        let agency = await mongoDB.agency.findById(id);
        let client = await mongoDB.client.find({agencyId:id});
        
        let data = {
            agency : agency,
            client : client
        }
        response.success(res, constants.SUCCESS_200.STATUS, "Data fetched Successfully",data);

    } catch (error) {
        let status = error.status? error.status: constants.ERROR_500.STATUS,
            message = error.message? error.message: constants.ERROR_500.MESSAGE;
        response.failed(res,status,message);
    }
}


const  updateClient = async (req,res) => {
    try {
       let id = req.query.client_id; 
       let client = await mongoDB.client.findById(id);
       
        if(client){
           let updateclient = await helpers.clientData(req.body,client.agencyId);
           let updateClientData = await updateclient.update({
               _id:req.body._id
           },{updateClient});
        
        response.success(res, constants.SUCCESS_200.STATUS, "Data updated Successfully",updateClientData);

        }
        
    }catch(error){
        let status = error.status? error.status: constants.ERROR_500.STATUS,
            message = error.message? error.message: constants.ERROR_500.MESSAGE;
        response.failed(res,status,message);
    }
}

const totalClientBill = async(req,res) => {
    try {
        let maxBill = await mongoDB.client.find().sort({totalBill:-1}).limit(1);
        let agencyName = await mongoDB.agency.find({_id:maxBill[0].agencyId});
        let data = {
            totalBill : maxBill[0].totalBill,
            agencyName : agencyName[0].name,
            clientName : maxBill[0].name
        }
        response.success(res, constants.SUCCESS_200.STATUS, "Data fetched Successfully",data);
  
    } catch (error) {
        let status = error.status? error.status: constants.ERROR_500.STATUS,
            message = error.message? error.message: constants.ERROR_500.MESSAGE;
        response.failed(res,status,message);
    }
}

const thirdPartyApi = async(req,res) => {
    try {
        const resData = await axios.get(`${BASE_URL}/todos`);
        let data = resData.data;
        response.success(res, constants.SUCCESS_200.STATUS, "external Api fetched Successfully",data);
    
    } catch (error) {
        let status = error.status? error.status: constants.ERROR_500.STATUS,
            message = error.message? error.message: constants.ERROR_500.MESSAGE;
        response.failed(res,status,message);
        
    }
}


module.exports = {
    createAgency,
    getClientByAgencyId,
    updateClient,
    totalClientBill,
    thirdPartyApi
}