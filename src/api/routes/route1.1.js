'use strict';

const controllers = require('../controller/apiController')
const router = require('express').Router()
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swagger = require(`${rootDir}/utils/swagger`);
const swaggerDocs = swaggerJsDoc(swagger.swaggerOptions);
const jwtAuth = require(`${rootDir}/utils/jwtAuth`);
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocs, { explorer: true }));

router.post('/auth',jwtAuth.checkCredentials);
/**
 * @swagger
 * /create:
 *    post:
 *      description: create agency with multiple client
 *    consumes :
 *      - application/json
 *    produces :
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        description: "Required for Api security"
 *        schema:
 *           type: string
 *           required:
 *            - token : string 
 *      - in: body
 *        name: body
 *        description: The user to create.
 *        schema:
 *           type: object
 *           required:
 *             - email_id
 *           properties:
 *             email_id:
 *               type: string
 *             name:
 *               type: string
 *             address1:
 *               type: string
 *             address2:
 *               type: string
 *             state:
 *               type: string
 *             city:
 *               type: string
 *             phoneNumber:
 *               type: string
 *             client:
 *               type: object
 *               properties:
 *                name1:
 *                 type: string
 *    responses:
 *      201:
 *      description: Created
 */
router.post("/create", jwtAuth.ensureAuthorizedUser,controllers.createAgency);

router.get("/client",jwtAuth.ensureAuthorizedUser,controllers.getClientByAgencyId);
/**
 * @swagger
 * /update:
 *    put:
 *      description: update  client
 *    consumes :
 *      - application/json
 *    produces :
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        description: "Required for Api security"
 *      - in: query
 *        name: client_id 
 *        schema:
 *           type: string
 *           required:
 *            - token : string 
 *      - in: body
 *        name: body
 *        description: The user to create.
 *        schema:
 *           type: object
 *           required:
 *             - email_id
 *           properties:
 *             email_id:
 *               type: string
 *             name:
 *               type: string
 *             address1:
 *               type: string
 *             address2:
 *               type: string
 *             state:
 *               type: string
 *             city:
 *               type: string
 *             phoneNumber:
 *               type: string
 *    responses:
 *      201:
 *      description: Created
 */

router.put("/update",jwtAuth.ensureAuthorizedUser,controllers.updateClient);

/**
 * @swagger
 * /maxbill:
 *    get:
 *      description: Get the max bill with client and agency name
 *    produces :
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        description: "Required for Api security"
 *    responses:
 *      201:
 *      description: Created
 */

router.get('/maxbill',jwtAuth.ensureAuthorizedUser,controllers.totalClientBill);

/**
 * @swagger
 * /externalApi:
 *    get:
 *      description: Get the external Api 
 *    produces :
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        description: "Required for Api security"
 *    responses:
 *      201:
 *      description: Created
 */

router.get('/externalApi',jwtAuth.ensureAuthorizedUser,controllers.thirdPartyApi);

module.exports = router
