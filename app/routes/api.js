const router = require('express').Router();

const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerDocument = require('../../swagger.json')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Teszt API',
            version: '0.0.1'
        }
    },
    apis: ['app/routes/api.js']
}

const swaggerDocument = swaggerJsDoc(swaggerOptions)
console.log(swaggerDocument)

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

/**
 * @swagger
 * /ping:
 *  get:
 *    description: Elérhetőség viszgálata
 *    responses:
 *      200:
 *        description: Success
 * 
 */
router.get('/ping', async (req, res) => {
    res.send({message: 'Helló'})
})

/**
 * @swagger
 * /emp:
 *  post:
 *    description: Create employee
 *    parameters:
 *    - name: name
 *      description: the employee's name
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      201:
 *        description: Created
 * 
 */
router.post('/emp', async (req, res) => {
    res.status(201).send()
})

module.exports = router
