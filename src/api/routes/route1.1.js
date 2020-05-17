'use strict';

const controllers = require('../controller/apiController')
const router = require('express').Router()
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swagger = require(`${rootDir}/utils/swagger`);
const swaggerDocs = swaggerJsDoc(swagger.swaggerOptions);

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocs, { explorer: true }));

/**
 * @swagger
 * /create:
 *    post:
 *      description: create agency with multiple client
 *    parameters:
 *      - name: customer
 *        description: Name of our customer
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: agencyId
 *        description: Name of our agencyId
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: address1
 *        description: Name of our address1
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: address2
 *        description: Name of our address2
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: state
 *        description: Name of our state
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: city
 *        description: Name of our state
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: phoneNumber
 *        description: Name of our state
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
router.post("/create", controllers.createAgency);

module.exports = router
