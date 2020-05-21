'use strict';


const {mongoDB, constants} = require(`${rootDir}/utils`)


const agencyData = async(agencyData) =>{
    try {
        const agency =new mongoDB.agency({
            email_id:agencyData.email_id,
            name: agencyData.name,
            address1:agencyData.address1,
            address2:agencyData.address2,
            state:agencyData.state,
            city:agencyData.city,
            phoneNumber:agencyData.phoneNumber,
        });
    return agency;
 
    } catch (error) {
        throw error;
    }
}

const clientData = async(clientData,agencyId) => {
    try {
        const client =new mongoDB.client({
            email:clientData.email,
            clientId:clientData.clientId,
            name: clientData.name,
            phoneNumber:clientData.phoneNumber,
            totalBill:clientData.totalBill,
            agencyId:agencyId,
        });
    return client;
        
    } catch (error) {
        
    }
}


module.exports = {
   agencyData,
   clientData
}
