'use strict';

const jwt = require('jsonwebtoken');

const checkCredentials = async function(req,res){
    try{
       let name = "test@gmail.com";
       let token = jwt.sign({email: name}, process.env.USER_JWT_SECRET, {expiresIn: 1440 });       
        res.json({
                type: true,
                token: token,
        });
       
    }catch(err){
        res.status(500).send(err);
    }

};

const ensureAuthorizedUser = function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(typeof token !== 'undefined'){
        jwt.verify(token,process.env.USER_JWT_SECRET, function(err, decoded){
            if(err || !decoded){
                console.log(err);
                res.status(401).json({ error: 'Unauthorized'});
            }else{
                 next();
            }
        });
    }else {
        res.status(403).json({ error: 'Forbidden'});
    }
};

module.exports = {
	checkCredentials,
    ensureAuthorizedUser
}